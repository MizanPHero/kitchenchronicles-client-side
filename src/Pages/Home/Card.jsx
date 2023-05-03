/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ chef }) => {
  const { experience, picture, name, no_of_recipes, likes } = chef;
  return (
    <>
      <div className="overflow-hidden rounded shadow-lg">
        <div className="h-64 overflow-hidden">
          <img className="object-center w-full" src={picture} alt="Chef" />
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-gray-800">{name}</div>
          <p className="text-lg text-gray-700">
            <span className="font-medium">Years of xperience : </span>
            {experience}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-medium">Number of Recipes : </span>
            {no_of_recipes}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-medium">Likes : </span>
            {likes}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            type="button"
            className="text-white bg-orange-600 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            View Recipes
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
