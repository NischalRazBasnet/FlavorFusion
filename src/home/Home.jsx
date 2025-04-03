import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Button, Input } from '@material-tailwind/react';
import { Formik } from 'formik';
import SearchItem from './SearchItem';
import MainMeal from './MainMeal';

export default function Home() {
  const nav = useNavigate();

  const [load, setLoad] = useState(false);
  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [search, setSearch] = useState(null);

  const getData = async () => {
    setLoad(true);
    try {
      if (search) {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/search.php',
          { params: { s: search } }
        );
        setData((prev) => response.data);
      } else {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );
        setData((prev) => response.data);
      }
      setLoad(false);
    } catch (err) {
      setErr(err.message);
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  if (load) return <h1>Loading...</h1>;
  if (err) return <h1>Error loading meals : {err.message}</h1>;
  if (!data) return <h1 className='flex-center'>NO meals</h1>;
  return (
    <div>
      <div className='justify-end px-5 py-3 flex gap-3.5'>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(val) => {
            setSearch(val.query);
          }}
        >
          {({ values, handleChange, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} className='flex gap-3.5'>
                <div>
                  <Input
                    value={values.query}
                    onChange={handleChange}
                    className='w-[300px]'
                    type='text'
                    name='query'
                    placeholder='Search'
                  />
                </div>
                <Button type='submit'>Search</Button>
              </form>
            );
          }}
        </Formik>
      </div>
      {search ? <SearchItem data={data} /> : <MainMeal data={data} />}
    </div>
  );
}
