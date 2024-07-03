import React, { Fragment } from "react";
import { Image } from "../Image/Image.tsx";
import "./index.css";
import { Link, Outlet } from "react-router-dom";
export function NavBar() {
  return (
    <Fragment>
      <div className={"navbar_container"}>
        <Image src="/logo.jpg" height={50} width={50} alt="" />
        <ul>
          <Link to="/">Home</Link>
          <Link to="/product-list">Product List</Link>
          <Link to="cart">Cart</Link>
        </ul>
      </div>
      <Outlet />
    </Fragment>
  );
}
