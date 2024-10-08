import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AddBookingcart from '../../AddBooking/AddBookingcart';
import { motion } from 'framer-motion';

const AllItem = () => {
  const [menu, SetMenu] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => SetMenu(data));
  }, []);

  return (
    <div>
      <div className="my-10">
        <h1 className="text-4xl font-bold p-2">All Destination</h1>
        <p className="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, ipsum?</p>
      </div>

      <div className="grid md:grid-cols-3 p-4 my-20 gap-10">
        {menu.map((item) => (
          <motion.div
            key={item.id}
            className="bg-gray-200 pb-10 rounded-lg"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }}   // Animation on load
            transition={{ duration: 0.5 }}    // Animation duration
            whileHover={{ scale: 1.05 }}      // Scale effect on hover
          >
            <div>
              <img src={item.img} alt="" />
            </div>
            <div className="flex justify-between p-5">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <h1 className="text-2xl">${item.price}</h1>
            </div>
            <p className="p-5">{item.description}</p>

            <div className="flex justify-between px-5">
              <Link to={`/productdetails/${item.id}`}>
                <button className="text-2xl">
                  <FaEye />
                </button>
              </Link>

              {/* Add Booking Cart for each product */}
              <AddBookingcart product={item} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
