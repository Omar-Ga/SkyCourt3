import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Dining from './pages/Dining';
import About from './pages/About';
import Cafes from './pages/Cafes';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dining', element: <Dining /> },
  { path: '/cafes', element: <Cafes /> },
  { path: '/about', element: <About /> },
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