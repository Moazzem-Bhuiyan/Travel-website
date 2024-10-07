import React from "react";
import Usedata from "../../Hooks/UseData/Usedata";
import { FaEye } from "react-icons/fa";
import ConnectedUs from "../../Home/ConectedUs/ConnectedUs";
import { Link } from "react-router-dom";
import AddBookingcart from "../../AddBooking/AddBookingcart";

const PopulerItem = () => {
  const { menu } = Usedata();

  const populeritem = menu.filter((data) => data.category === "Popular");

  return (
    <>
    <div className="my-10">
        <h1 className="text-4xl font -bold p-2">Populer Destination</h1>
        <p className="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, ipsum?</p>
    </div>
      <div className="grid md:grid-cols-3 my-20 gap-10 p-5">
        {populeritem.map((item) => (
          <div className="bg-gray-200 pb-10 rounded-md">
            <div>
              <img src={item.img} alt="" />
            </div>
            <div className="flex justify-between p-5">
              {" "}
              <h1 className="text-2xl font-bold">{item.name}</h1>{" "}
              <h1 className="text-2xl">${item.price}</h1>{" "}
            </div>
            <p className="p-5">{item.description}</p>

            <div className="flex justify-between px-5">
              {" "}
            <Link to = {`/productdetails/${item.id}`}>  <button  className="text-2xl">
                <FaEye></FaEye>
              </button>{" "}</Link>
              <AddBookingcart product={item} />
            </div>
          </div>
        ))}
      </div>

      <ConnectedUs></ConnectedUs>
    </>
  );
};

export default PopulerItem;
