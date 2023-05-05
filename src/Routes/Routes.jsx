import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Layouts/ErrorPage";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Login from "../Pages/LoginRegistration/Login";
import Registration from "../Pages/LoginRegistration/Registration";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://the-culinary-artist-server-mizanphero.vercel.app/"),
      },
      {
        path: "/:id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://the-culinary-artist-server-mizanphero.vercel.app/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
