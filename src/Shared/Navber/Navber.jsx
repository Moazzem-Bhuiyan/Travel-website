import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/tour/logo.png";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";
import { li } from "framer-motion/client";
import UseCart from "../../Hooks/usecart/UseCart";

const Navber = () => {
  const {user,Logout}=useContext(AuthContext)
  const navigate = useNavigate();

  const [cart] =UseCart();
  const totalPrice = cart.reduce((total,item)=> total + item.price,0)

  const handleOut= ()=>{

    Logout()
    .then(()=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, i want to leave!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin')
        }
      });
    })

    .catch (error=>{
      console.log('mama caught logout hoy nai ' , error)
    })

  }




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
            <div tabIndex={0} role="button" className="lg:hidden">
              <IoMenu></IoMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white  z-[1] mt-3 w-52 p-2 shadow"
            >
              {/*  */}
              {navlink}
            </ul>
          </div>
          <img className="btn btn-ghost" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            {/*  */}
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">

        <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-white z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{cart.length}</span>
          <span className="text-info">Subtotal: {totalPrice}</span>
          <div className="card-actions">
            <Link to='/carts' >  <button className="btn bg-red-500 text-white btn-block">View cart</button></Link>
          
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {user && user.photoURL ? (
                <img src={user?.photoURL} alt="user profile" />
              ) : (
                <FaUser className="mt-2 text-2xl ml-2"></FaUser>
              )}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to ='/userinfo'><a className="justify-between">
            Profile
          
          </a></Link>
        </li>
        <li><a>Settings</a></li>

       { user ? <li><a onClick={handleOut}>Logout</a></li> : <li><Link to='/signup'>Signup</Link></li> }

      </ul>
    </div>
  </div>

        </div>
      </div>
    </div>
  );
};

export default Navber;
