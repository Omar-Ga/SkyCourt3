import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Dining from './pages/Dining';
import About from './pages/About';
import Cafes from './pages/Cafes';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers'; // Import Careers component
import Rentals from './pages/Rentals'; // Import Rentals component

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dining', element: <Dining /> },
  { path: '/cafes', element: <Cafes /> },
  { path: '/about', element: <About /> },
  { path: '/contact-us', element: <ContactUs /> },
  { path: '/careers', element: <Careers /> }, // Add new route for Careers
  { path: '/rentals', element: <Rentals /> }, // Add new route for Rentals
]);

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Ensure document direction is set correctly on app load
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <SmoothScroll>
      <div className="overflow-clip" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <RouterProvider router={router} />
      </div>
    </SmoothScroll>
  );
}

export default App;