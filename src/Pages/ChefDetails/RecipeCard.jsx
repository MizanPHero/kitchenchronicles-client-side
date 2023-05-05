/* eslint-disable react/prop-types */
import React, { useState } from "react";
import StarRating from "./StarRating";
import { toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";


const RecipeCard = ({ recipe }) => {
  
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    toast.success("Added to Favorite")
  };

  return (
    <div className="overflow-hidden border rounded-lg shadow-md">
      {/* <img className="w-full" src={recipe.image} alt={recipe.name} /> */}
      <div className="overflow-hidden h-80">
          <LazyLoad height={320}><img className="object-cover object-center w-full h-full" src={recipe.image} alt={recipe.name} /></LazyLoad>
        </div>

      <div className="p-4">
        <h2 className="m-4 text-2xl font-bold text-center text-orange-600 ">{recipe.name}</h2>
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <div>
            <h3 className="mb-2 font-semibold">Ingredients:</h3>
            <ul className="pl-4 mb-4 list-disc">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.name}>
                  {ingredient.name}: {ingredient.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Instructions:</h3>
            <ol className="pl-4 list-decimal">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex justify-around mt-6">
        <StarRating rating={recipe.rating} />
        <button onClick={handleClick} disabled={clicked}
              type="button"
              className={clicked ? "text-white bg-orange-400 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" : "text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"}
            >
              Favorite
            </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
