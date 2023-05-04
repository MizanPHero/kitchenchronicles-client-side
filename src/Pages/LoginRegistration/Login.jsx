import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleLogin = event => {
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password = form.password.value;

    setError('');
    
    signIn(email,password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
    })
    .catch(error => {
      console.log(error);
      setError(error.message)
    })
  }

  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleLogin} className="p-4 mt-6 mb-0 space-y-8 rounded-lg shadow-lg sm:p-6 lg:p-8">
            <p className="text-lg font-medium text-center text-orange-600">
              Sign in to your account
            </p>

            <div>
              <input name="email"
                type="email"
                className="w-full p-4 text-sm border-2 rounded-full shadow-md focus-visible:outline-none focus:border-orange-500 pe-12 border-gray-50"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
               <input name="password"
                type="password"
                className="w-full p-4 text-sm border-2 rounded-full shadow-md focus-visible:outline-none focus:border-orange-500 border-gray-50 pe-12"
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
            <p className="text-sm text-center text-red-600">
              {error}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
