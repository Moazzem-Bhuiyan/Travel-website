import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/K0hp7MX/select.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <h1
          className="text-6xl font-bold text-white -mt-60 px-2 md:px-0"
          data-aos="fade-up" 
          data-aos-duration="1000" 
        >
          Make in your Journey
        </h1>
        {/* <input
          type="search"
          className="w-1/2 bg-white py-2 -mt-5 rounded-md"
          id=""
          data-aos="fade-up" 
          data-aos-duration="1200" 
          data-aos-delay="300" 
        /> */}
      </div>
    </div>
  );
};

export default Hero;
