import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useApi } from '../../hooks/apiHooks';

export default function CategoryItems() {
  const { label } = useParams();
  const nav = useNavigate();

  const [load, data, err] = useApi(
    'https://www.themealdb.com/api/json/v1/1/filter.php',
    { c: label }
  );

  if (load) return <h1>Loading...</h1>;
  if (err) return <h1>Error loading meals : {err.message}</h1>;
  if (!data) return <h1>NO {label} Items Found</h1>;
  return (
    <div>
      <div>
        <h1>{label} Items</h1>
      </div>
      <div className='px-20 py-10 grid grid-cols-4 place-items-center gap-y-15'>
        {data &&
          data.meals.map((meal) => {
            return (
              <div
                onClick={() => nav(`/item-detail/${meal.idMeal}`)}
                className='grayscale-50 w-[300px] h-[450px] bx-shadow hover:scale-105 hover:grayscale-0 cursor-pointer'
                key={meal.strMeal}
              >
                <img
                  className='w-[300px]'
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <div className='px-5 py-2 space-y-3.5'>
                  <h2 className='line-clamp-3'>{meal.strMeal}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
