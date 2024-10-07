import React from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../assets/tour/logo.png";

const Navber = () => {
  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      <li>
        <details>
          <summary>Package</summary>
          <ul className="p-2 bg-white">
            <li>
              <NavLink to="/populer">Populer Destination</NavLink>
            </li>
            <li>
              <NavLink to="/populer/allitem">All </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu></IoMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/*  */}
              {navlink}
            </ul>
          </div>
          <img className="btn btn-ghost text-xl" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            {/*  */}
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">
          <input
            type="search"
            name=""
            id=""
            className="bg-white rounded-lg border p-2 text-sm "
            placeholder="Search Your Destination"
          />
        </div>
      </div>
    </div>
  );
};

export default Navber;
