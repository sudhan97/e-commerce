import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MyCart from "../pages/MyCart/MyCart.tsx";
import { NavBar } from "../Components/NavBar/NavBar.jsx";
import { Home } from "../App.jsx";
import { Products } from "../pages/Products/Products.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/product-list",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <MyCart />,
      },
    ],
  },
]);

export default router;
