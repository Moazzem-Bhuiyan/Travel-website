import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main/Main";
import About from "../Pages/About/About";
import Packege from "../Pages/About/Packeg/Packege";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Populer from "../Pages/PopulerPackeg/Populer";
import PopulerItem from "../Pages/PopulerItemShow/PopulerItem";
import AllItem from "../Pages/AllItemShow/AllItem";
import ProductDetails from "../ProductDetails/ProductDetails";
import SignUp from "../Auth/SignUp/SignUp";
import SignIn from "../Auth/SignIn/SignIn";
import PrivateAuth from "../Auth/PrivateAuth/PrivateAuth";
import Mycart from "../Pages/MyCart/Mycart";
import Userinformation from "../UserInformation/Userinformation";
import AddBookingcart from "../AddBooking/AddBookingcart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/packege",
        element: <Packege></Packege>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/productdetails/:id",
        element: <PrivateAuth><ProductDetails></ProductDetails></PrivateAuth> ,
        loader : ()=>fetch('/data.json')
      },
      {
        path: "/booknow",
        element: <PrivateAuth><AddBookingcart></AddBookingcart></PrivateAuth>
       
      },

      // auth related Routes

      {
        path : '/signup',
        element: <SignUp></SignUp>
      },
      {
        path : '/signin',
        element: <SignIn></SignIn>
      },
      // cart

      {
        path: '/carts',
        element: <Mycart></Mycart>
      },
      // userinformation
      {
        path: "/userinfo",
        element: <Userinformation></Userinformation>

      }

    ],
  },

  {
    path: "/populer",
    element: <Populer></Populer>,
    children: [
      {
        path: "",
        element: <PopulerItem></PopulerItem>,
      },
      {
        path: "allitem",
        element: <AllItem></AllItem>,
      },
    ],
  },
]);
