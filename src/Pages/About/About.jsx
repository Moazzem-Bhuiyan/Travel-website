import {
  FaFileInvoiceDollar,
  FaPeopleCarry,
  FaShirtsinbulk,
  FaTrophy,
} from "react-icons/fa";
import about from "../../assets/choose/about.png";
import a11 from "../../assets/choose/11.png";
import a12 from "../../assets/choose/12.png";
import a13 from "../../assets/choose/13.png";
import a14 from "../../assets/choose/14.png";
import { useEffect } from "react";
import AOS from "aos"; // Correct import

import "aos/dist/aos.css"; // Import AOS styles
import ConnectedUs from "../../Home/ConectedUs/ConnectedUs";

const About = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true, // Animation only happens once
  });

  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/QJv8KPY/Banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <h1 className="text-6xl font-bold text-white">About Us</h1>
      </div>
      {/* vission mission */}
      <div className="card  grid gap-10 md:grid-cols-3 shadow-2xl px-10 pb-10 items-center justify-center w-[80%] my-20 m-auto">
        <div className="bg-white rounded-xl  hover:scale-105 duration-1000   shadow-xl my-20 space-y-3 p-5 py-16">
          <FaPeopleCarry className="text-7xl" />
          <h1 className="text-2xl font-semibold">Greate Team Work</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            dignissimos.
          </p>
        </div>
        <div className=" bg-white rounded-xl hover:scale-105 duration-1000  shadow-xl space-y-3 p-5 py-24">
          <FaFileInvoiceDollar className="text-7xl" />
          <h1 className="text-2xl font-semibold">Our Mission</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            dignissimos.
          </p>
        </div>
        <div className="bg-white rounded-xl hover:scale-105 duration-1000 shadow-xl space-y-3 p-5 py-16">
          <FaTrophy className="text-7xl" />
          <h1 className="text-2xl font-semibold">Our Vission</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            dignissimos.
          </p>
        </div>
      </div>
      {/* comment */}
      <div className="grid md:grid-cols-2 md:h-[400px] shadow-2xl my-20 p-10">
        <div className="flex justify-center">
          {" "}
          <img className="h-[300px]" src={about} alt="" />{" "}
        </div>

        <div className="space-y-3 mt-16">
          <FaShirtsinbulk className="text-4xl"></FaShirtsinbulk>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            excepturi quae sit accusantium distinctio nam doloribus perferendis
            aliquam, velit ipsam.
          </p>

          <h1 className="text-4xl font-bold">Moazzem Bhuiyan</h1>
          <p className="text-gray-400">Founder Travosca</p>
        </div>
      </div>
      {/* gallery */}

      <div>
        <div className=" my-10">
          <div className="grid md:grid-cols-4 p-10 md:p-0 gap-10 ">
            {/* Large Image */}
            <div className="col-span-2 row-span-2 " data-aos="fade-up">
              <img src={a11} alt="New Arrival 1" />
            </div>
            {/* Small Image */}
            <div
              className="col-span-2 "
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img src={a12} alt="New Arrival 2" />
            </div>
            {/* Smaller Images */}
            <div
              className="col-span-1 "
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img className="w-full" src={a13} alt="New Arrival 3" />
            </div>
            <div
              className="col-span-1 "
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img className="w-full" src={a14} alt="New Arrival 4" />
            </div>
          </div>
          <ConnectedUs></ConnectedUs>
        </div>
      </div>
    </div>
  );
};

export default About;
