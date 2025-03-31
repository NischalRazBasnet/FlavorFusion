import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  const nav = useNavigate();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      setLoad(false);
      setData((prev) => response.data);
    } catch (err) {
      console.log(err);
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Meals Category</h1>
      {data &&
        data.categories.map((cata) => {
          return (
            <div
              onClick={() => nav(`category-items/${cata.strCategory}`)}
              className='cursor-pointer'
              key={cata.idCategory}
            >
              <h1>{cata.strCategory}</h1>
              <img src={cata.strCategoryThumb} alt='' />
              <p>{cata.strCategoryDescription}</p>
            </div>
          );
        })}
    </div>
  );
}
