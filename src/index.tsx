import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = document.getElementById('root');

const container = createRoot(root);

// Никогда раньше не пользовался createBrowserRouter :o
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <h1>About page</h1>,
      },
      {
        path: "/info",
        element: <h1>Info page</h1>,
      },
    ],
  },
]);


container.render(<RouterProvider router={router} />);
