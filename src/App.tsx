import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Dining from './pages/Dining';
import About from './pages/About';
import Cafes from './pages/Cafes';

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
          <Route path="/about" element={<About />} />
          <Route path="/cafes" element={<Cafes />} />
        </Routes>
      </div>
    </SmoothScroll>
  );
}

export default App;