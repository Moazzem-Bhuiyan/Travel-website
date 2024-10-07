import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../../Shared/Navber/Navber";
import Footer from "../../Shared/Footer/Footer";

const Populer = () => {
  return (
    <div>
      <Navber></Navber>
      <div>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/QJv8KPY/Banner.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <h1 className="text-6xl font-bold text-white text-center">Travel Packages</h1>
        </div>
      </div>

      <div>
        <Outlet></Outlet>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Populer;
