import React, { useEffect } from 'react';
import { FaFileInvoiceDollar, FaPeopleCarry, FaTrophy } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoose = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='my-10'>
            <div className='chosse'>
                <h1 className='text-center text-6xl text-white font-bold pt-10'>
                    Why You Choose Us
                </h1>
            </div>

            <div className='card -mt-44 grid gap-10 md:grid-cols-3 items-center justify-center w-[80%] m-auto'>
                <div
                    className='bg-white rounded-xl hover:scale-105 duration-1000 shadow-xl space-y-3 p-5 py-16'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <FaPeopleCarry className='text-7xl' />
                    <h1 className='text-2xl font-semibold'>Best Service</h1>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dignissimos.
                    </p>
                </div>

                <div
                    className='bg-white rounded-xl hover:scale-105 duration-1000 shadow-xl space-y-3 p-5 py-24'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <FaFileInvoiceDollar className='text-7xl' />
                    <h1 className='text-2xl font-semibold'>Affordable Prices</h1>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dignissimos.
                    </p>
                </div>

                <div
                    className='bg-white rounded-xl hover:scale-105 duration-1000 shadow-xl space-y-3 p-5 py-16'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <FaTrophy className='text-7xl' />
                    <h1 className='text-2xl font-semibold'>Award Winning</h1>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dignissimos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
