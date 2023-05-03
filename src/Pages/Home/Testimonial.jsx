/* eslint-disable react/jsx-key */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Testimonial = () => {
  const data = useLoaderData()
  console.log(data);
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-xl font-bold text-orange-600 uppercase md:text-3xl">
              our master chef's
            </div>
            <div className="-mt-2 border-b-4 border-orange-600">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
            <div className="mt-5 text-sm text-center text-black">
              Follow the chef's journey as they explore various ingredients.
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {
              data.map(chef => (
                <Card key={chef.id} chef={chef}></Card>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
