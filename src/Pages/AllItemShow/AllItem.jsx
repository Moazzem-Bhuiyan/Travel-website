import React, { useEffect, useState } from 'react';

import { FaEye } from 'react-icons/fa';


const AllItem = () => {

  const [menu,SetMenu]=useState([])

  useEffect (()=>{

    fetch('/data.json')
    .then(res=> res.json())
    .then(data=> SetMenu(data))
  },[])

  console.log(menu)

    return (
        <div>
             <div className="my-10">
        <h1 className="text-4xl font -bold p-2">All Destination</h1>
        <p className="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, ipsum?</p>
    </div>
   
      <div className="grid md:grid-cols-3 p-4 my-20 gap-10">
        {menu.map((item) => (
          <div className="bg-gray-200 pb-10 rounded-lg">
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
              <button className="text-2xl">
               <FaEye></FaEye>
              </button>{" "}
              <button className="btn text-white">Booking</button>{" "}
            </div>
          </div>
        ))}
      </div>

        </div>
    );
};

export default AllItem;