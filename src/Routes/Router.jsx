import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import BlogDetails from "../components/Home/Home/CardDetails/Blog/BlogDetails";
import Blog from "../components/Home/Home/CardDetails/Blog/Blog";


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
        }
      ]
    },
  ]);