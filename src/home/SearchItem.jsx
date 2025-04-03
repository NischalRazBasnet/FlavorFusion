import React from 'react';

export default function SearchItem({ data }) {
  return (
    <div className='space-y-5'>
      {data &&
        data.meals?.map((meal) => {
          return (
            <div key={meal.idMeal} className='space-y-5  div-shadow'>
              <h1 className='pt-10'>{meal.strMeal}</h1>
              <div className='px-20 py-10 grid grid-cols-[1fr_2fr] gap-10 space-y-5'>
                <div>
                  <img
                    className='h-[400px] w-[500px]'
                    src={meal.strMealThumb}
                    alt=''
                  />
                </div>
                <div>
                  <p>{meal.strInstructions}</p>
                </div>
                <div className='px-5 flex justify-between gap-2.5'>
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
                    width='800'
                    height='450'
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
