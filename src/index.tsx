import { App } from '@/components/App';
import { About } from '@/pages/About';
import { Posts } from '@/pages/Posts';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'loading...'}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/posts',
        element: (
          <Suspense fallback={'loading...'}>
            <Posts />
          </Suspense>
        ),
      },
    ],
  },
]);

const container = createRoot(root);
container.render(<RouterProvider router={router} />);
