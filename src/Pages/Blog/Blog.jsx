import React from 'react';

const Blog = () => {
    return (
        <div className="my-container lg:w-2/4">
      <div className="p-8 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
        <h1 className="my-5 text-2xl font-semibold">
        Differences between uncontrolled and controlled components
        </h1>
        <p className="font-normal">
        Controlled components use React state to manage and update their values, while uncontrolled components rely on the browser's default behavior and the DOM API. Controlled components offer more control and flexibility, while uncontrolled components are simpler to set up.
        </p>
      </div>
      <div className="p-8 mt-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
        <h1 className="my-5 text-2xl font-semibold">How to validate React props using PropTypes?</h1>
        <p className="font-normal">
        PropTypes is a tool in React that helps ensure that the correct types of props are being passed into components. To use PropTypes, we define a propType for each prop in our component using the prop-types library. This helps prevent errors and make our code more reliable.
        </p>
      </div>
      <div className="p-8 mt-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
        <h1 className="my-5 text-2xl font-semibold">Difference between nodejs and express js?</h1>
        <p className="font-normal">
        Node.js is a runtime environment that executes JavaScript code on the server. Express.js is a framework built on top of Node.js that provides features and tools for building web applications. Express.js makes it easier to create server-side applications with Node.js.
        </p>
      </div>
      <div className="p-8 mt-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
        <h1 className="my-5 text-2xl font-semibold">What is custom hook, and why will you create a custom hook?</h1>
        <p className="font-normal">
        A custom hook is a JavaScript function that allows you to reuse logic across your React components. You might create a custom hook to simplify my code, remove duplication, or make my components more modular and reusable.
        </p>
      </div>
    </div>
    );
};

export default Blog;