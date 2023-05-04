import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <form className="p-4 mt-6 mb-0 space-y-8 rounded-lg shadow-lg sm:p-6 lg:p-8">
            <p className="text-lg font-medium text-center text-orange-600">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                className="w-full p-4 text-sm rounded-full shadow-md pe-12"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <input
                type="password"
                className="w-full p-4 text-sm rounded-full shadow-md pe-12"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-white bg-orange-600 rounded-full hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Sign in
            </button>

            <p className="text-sm text-center text-gray-500">
              No account?
              <Link className="underline" to={'/registration'}>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
