import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function CategoryItems() {
  const { label } = useParams();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  const getItems = async () => {
    setLoad(true);
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php',
        {
          params: {
            c: label,
          },
        }
      );
      setData((prev) => response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  console.log(data);

  if (load) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Items Page</h1>
      {data &&
        data.meals.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <img className='w-[200px]' src={meal.strMealThumb} alt='' />
              <h1>{meal.strMeal}</h1>
            </div>
          );
        })}
    </div>
  );
}
