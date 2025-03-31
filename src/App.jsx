import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Rootlayout from './components/Rootlayout';
import CategoryItems from './pages/category-items/CategoryItems';
import Home from './home/Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'category-items/:label',
          element: <CategoryItems />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
