import React from 'react';
import { useNavigate } from 'react-router';

export default function MainMeal({ data }) {
  const nav = useNavigate();
  return (
    <div>
      <div className='pt-5'>
        <div className='flex gap-3.5'></div>
        <h1>Meals</h1>
      </div>
      <div className='px-20 py-10 grid grid-cols-4 place-items-center gap-y-15'>
        {data &&
          data.categories.map((category) => {
            return (
              <div
                onClick={() => nav(`category-items/${category.strCategory}`)}
                className='grayscale-50 w-[300px] h-[350px] bx-shadow hover:scale-105 hover:grayscale-0 cursor-pointer'
                key={category.idCategory}
              >
                <img
                  className='w-[300px]'
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
                <div className='px-5 py-2 space-y-3.5'>
                  <h2>{category.strCategory}</h2>
                  <p className='line-clamp-3'>
                    {category.strCategoryDescription}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
