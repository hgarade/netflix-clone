import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
const Body = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
