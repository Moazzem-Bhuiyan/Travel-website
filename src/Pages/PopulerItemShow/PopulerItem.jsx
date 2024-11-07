import React, { useEffect } from "react";
import Usedata from "../../Hooks/UseData/Usedata";
import { FaEye } from "react-icons/fa";
import ConnectedUs from "../../Home/ConectedUs/ConnectedUs";
import { Link } from "react-router-dom";
import AddBookingcart from "../../AddBooking/AddBookingcart";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const PopulerItem = () => {
  const { menu } = Usedata();

  const populeritem = menu.filter((data) => data.category === "Popular");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation only happens once
    });
  }, []);

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    target.style.transform = `translate(${offsetX / 10}px, ${offsetY / 10}px)`;
  };

 
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <>
      <div className="my-10">
        <h1 className="text-4xl font-bold p-2">Popular Destination</h1>
        <p className="p-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, ipsum?
        </p>
      </div>
      <div className="grid md:grid-cols-3 my-20 gap-10 p-5">
        {populeritem.map((item) => (
          <div
            className="bg-gray-200 pb-10 rounded-md transition-transform duration-300 hover:shadow-lg"
            data-aos="fade-up"
            key={item.id}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <img src={item.img} alt="" className="rounded-t-md" />
            </div>
            <div className="flex justify-between p-5">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <h1 className="text-2xl">${item.price}</h1>
            </div>
            <p className="p-5">{item.description}</p>

            <div className="flex justify-between px-5">
              <Link to={`/productdetails/${item.id}`}>
                <button className="text-2xl transition-colors duration-200 hover:text-blue-600">
                  <FaEye />
                </button>
              </Link>
              <AddBookingcart product={item} />
            </div>
          </div>
        ))}
      </div>

      <ConnectedUs />
    </>
  );
};

export default PopulerItem;
