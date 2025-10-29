
const fs = require('fs');
const path = require('path');

const CWD = process.cwd();
const LOCALES_DIR = path.join(CWD, 'src', 'locales');
const SRC_DIR = path.join(CWD, 'src');

const KEY_REGEX = /t\(['"]([^\'"]+)['"].*?\)/g;
const IMPORT_REGEX = /import(?:[\s\w{},*]+from)?\s+['"](\..*?)['"];/g;

function getNestedValue(obj, key) {
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function setNestedValue(obj, key, value) {
    const keys = key.split('.');
    const lastKey = keys.pop();
    let current = obj;
    for (const k of keys) {
        current = current[k] = current[k] || {};
    }
    current[lastKey] = value;
}

function deleteNestedValue(obj, key) {
    const keys = key.split('.');
    const lastKey = keys.pop();
    let current = obj;
    for (const k of keys) {
        if (current === undefined) return false;
        current = current[k];
    }
    if (current !== undefined && current.hasOwnProperty(lastKey)) {
        delete current[lastKey];
        return true;
    }
    return false;
}

function findDependencies(filePath, allDependencies = new Set()) {
    const absoluteFilePath = path.resolve(SRC_DIR, filePath);
    if (!fs.existsSync(absoluteFilePath) || allDependencies.has(absoluteFilePath)) {
        return allDependencies;
    }

    allDependencies.add(absoluteFilePath);
    const content = fs.readFileSync(absoluteFilePath, 'utf-8');
    const dirName = path.dirname(absoluteFilePath);

    let match;
    while ((match = IMPORT_REGEX.exec(content)) !== null) {
        const relativeImportPath = match[1];
        let importPath = path.resolve(dirName, relativeImportPath);

        if (!path.extname(importPath)) {
            if (fs.existsSync(importPath + '.ts')) {
                importPath += '.ts';
            } else if (fs.existsSync(importPath + '.tsx')) {
                importPath += '.tsx';
            } else {
                const indexPath = path.join(importPath, 'index.ts');
                const indexTsxPath = path.join(importPath, 'index.tsx');
                if (fs.existsSync(indexPath)) {
                    importPath = indexPath;
                } else if (fs.existsSync(indexTsxPath)) {
                    importPath = indexTsxPath;
                }
            }
        }
        
        if (fs.existsSync(importPath) && !allDependencies.has(importPath)) {
            findDependencies(path.relative(SRC_DIR, importPath), allDependencies);
        }
    }

    return allDependencies;
}

function extractKeysFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const keys = new Set();
    let match;
    // Use the new regex and reset its state for each file
    const localRegex = new RegExp(KEY_REGEX);
    while ((match = localRegex.exec(content)) !== null) {
        keys.add(match[1]);
    }
    return keys;
}

function extractAndCreate(entryFile) {
    console.log(`Starting analysis from: ${entryFile}`);

    const allFiles = findDependencies(path.relative(SRC_DIR, entryFile));
    allFiles.add(path.resolve(CWD, entryFile)); 

    console.log(`Found ${allFiles.size} related files.`);

    const allKeys = new Set();
    for (const file of allFiles) {
        const keys = extractKeysFromFile(file);
        keys.forEach(key => allKeys.add(key));
    }

    console.log(`Found ${allKeys.size} unique translation keys.`);

    const pageName = path.basename(entryFile, path.extname(entryFile)).toLowerCase();
    const outputFileName = `${pageName}.json`;

    ['en', 'ar'].forEach(lang => {
        const mainTranslationPath = path.join(LOCALES_DIR, lang, 'translation.json');
        if (!fs.existsSync(mainTranslationPath)) {
            console.warn(`Warning: Could not find ${mainTranslationPath}`);
            return;
        }

        const mainTranslation = JSON.parse(fs.readFileSync(mainTranslationPath, 'utf-8'));
        const newTranslation = {};
        let keysFoundCount = 0;

        for (const key of allKeys) {
            const value = getNestedValue(mainTranslation, key);
            if (value !== undefined) {
                setNestedValue(newTranslation, key, value);
                keysFoundCount++;
            }
        }
        
        const newFilePath = path.join(LOCALES_DIR, lang, outputFileName);
        fs.writeFileSync(newFilePath, JSON.stringify(newTranslation, null, 2));

        console.log(`Successfully created ${newFilePath}. It contains data for ${keysFoundCount} of the found keys.`);
    });
}

function cleanup(entryFile) {
    console.log(`Starting cleanup for entry file: ${entryFile}`);

    const allFiles = findDependencies(path.relative(SRC_DIR, entryFile));
    allFiles.add(path.resolve(CWD, entryFile));
    const allKeys = new Set();
    for (const file of allFiles) {
        const keys = extractKeysFromFile(file);
        keys.forEach(key => allKeys.add(key));
    }
    console.log(`Found ${allKeys.size} unique keys to clean up.`);

    ['en', 'ar'].forEach(lang => {
        const mainTranslationPath = path.join(LOCALES_DIR, lang, 'translation.json');
        if (!fs.existsSync(mainTranslationPath)) {
            console.warn(`Warning: Could not find ${mainTranslationPath}`);
            return;
        }

        const mainTranslation = JSON.parse(fs.readFileSync(mainTranslationPath, 'utf-8'));
        let keysRemovedCount = 0;

        for (const key of allKeys) {
            if (deleteNestedValue(mainTranslation, key)) {
                keysRemovedCount++;
            }
        }

        fs.writeFileSync(mainTranslationPath, JSON.stringify(mainTranslation, null, 2));
        console.log(`Removed ${keysRemovedCount} keys from ${mainTranslationPath}.`);
    });
}

function main() {
    const args = process.argv.slice(2);
    const cleanupFlagIndex = args.findIndex(arg => arg === '--cleanup');

    if (cleanupFlagIndex !== -1) {
        const entryFile = args[cleanupFlagIndex + 1];
        if (!entryFile) {
            console.error('Please provide an entry file path for cleanup (e.g., src/pages/Home.tsx).');
            process.exit(1);
        }
        cleanup(entryFile);
    } else {
        const entryFile = args[0];
        if (!entryFile) {
            console.error('Please provide an entry file path (e.g., src/pages/Home.tsx).');
            process.exit(1);
        }
        extractAndCreate(entryFile);
    }
}

main();
