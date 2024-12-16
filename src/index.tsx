import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from '@components/App';
import { About } from '@pages/AboutPage';
import { Info } from '@pages/InfoPage';

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
        element: <Suspense fallback="Загрузка...">
          <About />
        </Suspense>,
      },
      {
        path: "/info",
        element: <Suspense fallback="Загрузка...">
          <Info />
        </Suspense>,
      },
    ],
  },
]);


container.render(<RouterProvider router={router} />);
