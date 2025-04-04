import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import ToTop from './ToTop';

export default function Rootlayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <ToTop />
    </div>
  );
}
