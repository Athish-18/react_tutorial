import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import ParamComp from "./Components/ParamComp";
import Courses from "./Components/courses";
import MockTests from "./Components/MockTests";
import Reports from "./Components/reports";
import Notfound from "./Components/Notfound";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mock-tests",
        element: <MockTests />,
      },
      {
        path: "reports",
        element: <Reports/>,
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: "*",
    element:<Notfound />
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
