import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Button, Input } from '@material-tailwind/react';
import { Formik } from 'formik';
import { useApi } from '../hooks/apiHooks';

export default function Header() {
  const nav = useNavigate();
  const [search, setSearch] = useState('');
  const [load, data, err] = useApi(
    'https://www.themealdb.com/api/json/v1/1/search.php',
    { s: search }
  );
  return (
    <div className='flex justify-between px-5 py-3 w-full h-fit bg-black text-white'>
      <NavLink to={'/'}>
        <h1 className='text-xl normal-case'>MealDb</h1>
      </NavLink>
    </div>
  );
}
