import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Rootlayout from './components/Rootlayout';
import CategoryItems from './pages/category-items/CategoryItems';
import Home from './home/Home';
import ItemDetail from './pages/itemDetail/ItemDetail';
import SearchItem from './home/SearchItem';

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
        {
          path: 'item-detail/:id',
          element: <ItemDetail />,
        },
        {
          path: 'search-item',
          element: <SearchItem />,
        },
      ],
    },
    {
      path: '*',
      element: <h1>404 Not Found</h1>,
    },
  ]);
  return (
    <div className='max-w-[1750px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}
