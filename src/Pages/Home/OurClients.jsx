import React from "react";

const OurClients = () => {
  return (
    <section className="text-gray-600 my-container body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-xl font-bold text-orange-600 uppercase md:text-3xl">
            Client Says
          </h1>
          <div className="flex justify-center mt-6">
            <div className="inline-flex w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="inline-flex items-center justify-center flex-shrink-0 mb-5 text-red-500 bg-red-100 rounded-full w-36 h-36">
              {/* img */}
              <img
                className="rounded-full"
                src="https://i.ibb.co/cD3dp5k/photo-1.jpg"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-orange-600 title-font">
                Thomas William
              </h2>
              <p className="text-base leading-relaxed">
                I absolutely love Kitchen Chronicles! As someone who is always
                trying out new recipes, I appreciate the variety of delicious
                and easy-to-follow recipes on this website. From quick weeknight
                meals to impressive dinner party dishes.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="inline-flex items-center justify-center flex-shrink-0 mb-5 text-red-500 bg-red-100 rounded-full w-36 h-36">
              {/* img */}
              <img
                className="rounded-full"
                src="https://i.ibb.co/nBN5GBg/photo-2.jpg"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-orange-600 title-font">
                Jonathon Liam
              </h2>
              <p className="text-base leading-relaxed">
                Kitchen Chronicles has become my go-to source for all things
                cooking. The step-by-step instructions are easy to follow, and
                the recipes always turn out perfectly. I've even impressed
                awesome.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="inline-flex items-center justify-center flex-shrink-0 mb-5 text-red-500 bg-red-100 rounded-full w-36 h-36">
              {/* img */}
              <img
                className="rounded-full"
                src="https://i.ibb.co/nBN5GBg/photo-2.jpg"
                alt=""
              />
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-orange-600 title-font">
                James Hudson
              </h2>
              <p className="text-base leading-relaxed">
                I stumbled upon Kitchen Chronicles when I was looking for a
                specific type of cuisine to make for a dinner party, and I'm so
                glad I did! The site is incredibly organized and easy to
                navigate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
