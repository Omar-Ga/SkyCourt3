import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Dining from './pages/Dining';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <SmoothScroll>
      <div className="animated-gradient min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dining" element={<Dining />} />
        </Routes>
      </div>
    </SmoothScroll>
  );
}

export default App;