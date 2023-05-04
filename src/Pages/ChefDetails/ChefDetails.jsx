import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Spinner from "../Home/Spinner";

const ChefDetails = () => {
  const chefData = useLoaderData();

  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }

  const {
    name,
    picture,
    short_bio,
    likes,
    no_of_recipes,
    experience,
    recipes,
  } = chefData;
  return (
    <section>
      <div className="flex flex-col items-center px-5 py-24 mx-auto text-gray-600 my-container md:flex-row">
        <div className="w-5/6 mb-10 overflow-hidden h-1/6 lg:max-w-md lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={picture}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-2 text-3xl font-bold leading-tight text-gray-800 md:text-4xl lg:text-5xl">
            {name}
          </h1>
          <p className="mt-8 mb-8 text-base leading-normal md:text-lg lg:text-xl">
            {short_bio}
          </p>
          <div className="flex items-center mb-6">
            <svg
              className="w-5 h-5 mr-2 text-orange-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14 7v2h-4v-2H7v6h2v2H7c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2h7zM16 0H4C2.897 0 2 .897 2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2zM9 2h2v2H9V2zM6 2h2v2H6V2zM3 2h2v2H3V2zM3 16V4h2v12H3zm14 0H5V4h12v12z" />
            </svg>

            <p className="text-gray-700">{no_of_recipes} Recipes</p>
          </div>
          <div className="flex items-center mb-6">
            <svg
              className="w-5 h-5 mr-2 text-orange-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10,20c-5.523,0-10-4.477-10-10s4.477-10,10-10s10,4.477,10,10S15.523,20,10,20z M10,2c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S14.411,2,10,2z M9,6h2v6H9V6z M9,14h2v2H9V14z" />
            </svg>

            <p className="text-gray-700">Years of experience: {experience}</p>
          </div>

          <div className="flex items-center mb-6">
            <svg
              className="w-5 h-5 mr-2 text-orange-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12.585l4.243 2.45-1-4.686 3.328-2.876-4.386-.374L10 4.046l-1.185 4.053-4.386.374 3.328 2.876-1 4.686z" />
            </svg>
            <p className="text-gray-700">{likes} Likes</p>
          </div>
        </div>
      </div>

      {/* Recipe Section Start */}

      <div className="flex flex-col items-center justify-center ">
        <div className="text-xl font-bold text-orange-600 uppercase md:text-3xl">
          Recipes
        </div>
        <div className="-mt-2 border-b-4 border-orange-600">
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      </div>


      <div className="grid grid-cols-1 gap-4 my-container">
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
      {/* Recipe Section End*/}
    </section>
  );
};

export default ChefDetails;
