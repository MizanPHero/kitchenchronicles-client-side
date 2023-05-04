import React from "react";

const Slider = () => {
  return (
    <div className="my-container">
        <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-xl font-bold text-orange-600 uppercase md:text-3xl">
              popular dishes of us
            </div>
            <div className="-mt-2 border-b-4 border-orange-600">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </div>
      <div className="w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/TqYJLKN/photo-1507273026339-31b655f3752d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/fqFmrZ2/photo-1630278156268-12d56c2e135f.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/LvwVshH/photo-1599749011927-9a77278bfa61.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="relative w-full carousel-item">
          <img
            src="https://i.ibb.co/0CLyHRD/photo-1574885014162-92e4f12928db.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="bg-orange-500 border-none btn btn-circle hover:bg-orange-700"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
