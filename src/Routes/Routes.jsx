import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Layouts/ErrorPage";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://127.0.0.1:5000/')
            },
            {
                path: '/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://127.0.0.1:5000/${params.id}`)
            }
        ]
    }
])

export default router;