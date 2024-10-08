import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ConnectedUs from '../../Home/ConectedUs/ConnectedUs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS Import

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <div>
            <div
                className="hero h-[600px]"
                style={{
                    backgroundImage: "url(https://i.ibb.co/QMqzBkS/unsplash-JFFv-PHk-GTy-Q.png)",
                }}
                data-aos="fade-up" // AOS animation for the hero section
            >
                <div className="hero-overlay bg-opacity-20"></div>
                <h1 className="text-6xl font-bold text-white">Contact Us</h1>
            </div>

            {/* form */}
            <div className="max-w-md mx-auto p-4">
                <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            id="name"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                            type="email"
                            id="email"
                            className={`shadow appearance-none text-black bg-white border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            id="message"
                            rows="4"
                            className={`shadow text-black bg-white appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <ConnectedUs />
        </div>
    );
};

export default Contact;
