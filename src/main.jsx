import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/Home.jsx";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register.jsx";
import Errorpage from "./components/common/Errorpage.jsx";
import Alltoy from "./components/pages/alltoy/Alltoy.jsx";
import Addatoy from "./components/pages/addatoy/Addatoy.jsx";
import Mytoy from "./components/pages/mytoy/Mytoy.jsx";
import Blog from "./components/pages/blog/Blog.jsx";
import Updatetoy from "./components/pages/updatetoy/Updatetoy.jsx";
import Viewtoy from "./components/pages/viewtoy/Viewtoy.jsx";
import Authprovider from "./provider/Authprovider.jsx";
import Privateroute from "./components/privateroute/Privateroute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "alltoy",
        element: <Alltoy></Alltoy>,
      },
      {
        path: "mytoy",
        element: <Mytoy></Mytoy>,
      },
      {
        path: "mytoy/updatetoy/:id",
        element: <Updatetoy></Updatetoy>,
        loader: ({ params }) =>
          fetch(`https://tinyzoo-server.vercel.app/toyupdate/${params.id}`),
      },
      {
        path: "alltoy/toyDetails/:id",
        element: (
          <Privateroute>
            <Viewtoy></Viewtoy>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`https://tinyzoo-server.vercel.app/toyupdate/${params.id}`),
      },
      {
        path: "addatoy",
        element: <Addatoy></Addatoy>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
