import React from "react";
import Lottie from "lottie-react";
import OrderPrepare from "../../../public/OrderPrepare.json"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col-reverse items-center my-container md:flex-row lg:py-2">
        <div className="flex flex-col items-center mb-10 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-orange-600 title-font sm:text-4xl md:text-4xl md:leading-normal">
          A Chef's Journey
            <br className="hidden lg:inline-block" />
            Through Culinary Delights
          </h1>
          <p className="mb-8 leading-relaxed">
          is a website that takes you on a culinary adventure through the eyes of a professional chef. This platform is an ode to the art of cooking and a celebration of the diversity and richness of the American cuisine. Follow the chef's journey as they explore various ingredients,
          </p>
          
        </div>
        <div className="w-5/6 -z-50 lg:max-w-lg lg:w-7/12 md:w-1/2">
          <div className="-mt-16 -z-50"><Lottie animationData={OrderPrepare} loop={true} /></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
