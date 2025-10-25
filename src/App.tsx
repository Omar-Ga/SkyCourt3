import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Dining from './pages/Dining';
import About from './pages/About';
import Cafes from './pages/Cafes';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers'; // Import Careers component
import CafesRefactored from './pages/Cafes_refactored';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dining', element: <Dining /> },
  { path: '/cafes', element: <Cafes /> },
  { path: '/cafes-refactored', element: <CafesRefactored /> },
  { path: '/about', element: <About /> },
  { path: '/contact-us', element: <ContactUs /> },
  { path: '/careers', element: <Careers /> }, // Add new route for Careers
]);

function App() {
  return (
    <SmoothScroll>
      <div className="overflow-clip">
        <RouterProvider router={router} />
      </div>
    </SmoothScroll>
  );
}

export default App;