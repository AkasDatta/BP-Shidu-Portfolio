import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import BlogDetails from "../components/Home/Home/CardDetails/Blog/BlogDetails";
import Login from "../components/Home/login/Login/Login";
import Register from "../components/Home/login/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/blog/:id',
          element: <BlogDetails />
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Register></Register>
        },
        {
          path: 'secret',
          element: <Secret></Secret>
        }
      ]
    },
  ]);