import React from 'react';
import { useParams } from 'react-router';
import { useApi } from '../../hooks/apiHooks';
import { object } from 'yup';

export default function ItemDetail() {
  const { id } = useParams();

  const [load, data, err] = useApi(
    'https://www.themealdb.com/api/json/v1/1/lookup.php',
    { i: id }
  );

  if (load) return <h1 className=''>Loading...</h1>;
  if (err) return <h1>Error loading meals : {err.message}</h1>;
  if (!data) return <h1>NO Items Found</h1>;

  return (
    <div>
      {data &&
        data.meals.map((meal) => {
          return (
            <div key={meal.idMeal} className='space-y-5'>
              <h1 className='pt-10'>{meal.strMeal}</h1>
              <div className='px-20 max-sm:px-10 py-10 grid grid-cols-[1fr_2fr] max-sm:grid-cols-1 gap-5'>
                <div>
                  <img
                    className='h-[400px] w-[500px] max-sm:size-[300px]'
                    src={meal.strMealThumb}
                    alt=''
                  />
                </div>
                <div>
                  <p className='max-sm:text-justify'>{meal.strInstructions}</p>
                </div>
                <div className='px-5 max-sm:px-0 max-sm:w-[100px] flex justify-between gap-2.5'>
                  <div>
                    <h3>Ingredients</h3>
                    {Object.keys(meal).map((ingredients) => {
                      if (
                        ingredients.startsWith('strIngredient') &&
                        meal[ingredients].trim().length > 0
                      ) {
                        return (
                          <p className='line-clamp-1' key={ingredients}>
                            {meal[ingredients]}
                          </p>
                        );
                      }
                    })}
                  </div>
                  <div>
                    <h3>Measurements</h3>
                    {Object.keys(meal).map((measure) => {
                      if (
                        measure.startsWith('strMeasure') &&
                        meal[measure].trim().length > 0
                      )
                        return (
                          <p className='line-clamp-1' key={measure}>
                            {meal[measure]}
                          </p>
                        );
                    })}
                  </div>
                </div>
                <div className='place-self-center'>
                  <iframe
                    className='w-[800px] h-[450px] max-sm:size-[300px]'
                    src={`https://www.youtube.com/embed/${
                      meal.strYoutube.split('=')[1]
                    }`}
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerpolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
