import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS Import
import ConnectedUs from '../../Home/ConectedUs/ConnectedUs';
import { useForm } from 'react-hook-form';

const Blog = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log(data);

    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <div>
            {/* hero */}
            <div
                className="hero h-[600px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/P5mKjwN/unsplash-NXET8d-Ol-KHU.png)",
                }}
            >
                <div className="hero-overlay bg-opacity-20"></div>
                <h1 className="text-6xl text-center font-bold text-white -mt-60">
                    Make in your Journey
                </h1>
            </div>
            {/* hero */}

            {/* blog */}
            <div className='grid md:grid-cols-6'>
                <div className='col-span-4 p-10 space-y-4'>
                    {/* Blog Post 1 */}
                    <div data-aos="fade-up">
                        <img src="https://i.ibb.co.com/t8MLwf8/unsplash-1-XLyzi17-Z2-M.png" alt="" />
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aliquam optio reiciendis 
                            impedit quaerat dolorum soluta, voluptatibus, molestiae culpa tempore, 
                            expedita quod. Nulla quae optio, rerum est praesentium iusto facere, 
                            esse beatae sequi laboriosam deleniti nostrum! Asperiores dolore ad consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Rem repudiandae qui vel facilis illum eligendi quisquam deserunt, corrupti doloribus aliquid?</h1>
                        <h1 className='text-3xl font-bold'>Foisal Ahmed</h1>
                    </div>

                    {/* Blog Post 2 */}
                    <div data-aos="fade-up" className="mt-10">
                        <img src="https://i.ibb.co.com/Fgzp1SB/unsplash-Xb-PG4k-KUw-E.png" alt="" />
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aliquam optio reiciendis 
                            impedit quaerat dolorum soluta, voluptatibus, molestiae culpa tempore, 
                            expedita quod. Nulla quae optio, rerum est praesentium iusto facere, 
                            esse beatae sequi laboriosam deleniti nostrum! Asperiores dolore ad consectetur! Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Excepturi illum nam iure cupiditate ipsa dicta odio consequuntur. Dignissimos, ut enim?</h1>
                        <h1 className='text-3xl font-bold'>Moazzem Bhuiyan</h1>
                    </div>
                </div >

                <div className='col-span-2 p-10 '>
                    <div className='child1 bg-white p-4 shadow-2xl space-y-5'>
                        <h1 className='uppercase text-xl'>New Post</h1>
                        <div className='md:flex' data-aos="fade-right">
                            <img className='w-2/5' src="https://i.ibb.co/mtGPrjW/d1jpg.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Minimal Wall Decoration 1</span>
                        </div>
                        <div className='md:flex' data-aos="fade-right">
                            <img className='w-2/5' src="https://i.ibb.co/t3dRPKf/d2.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Minimal Wall Decoration 2</span>
                        </div>
                        <div className='md:flex' data-aos="fade-right">
                            <img className='w-2/5' src="https://i.ibb.co/8g97x96/11-1140x570.jpg" alt="" />
                            <span className='grid items-center font-mono hover:text-cyan-500 ml-2'>Minimal Wall Decoration 3</span>
                        </div>
                    </div>

                    {/* category */}
                    <div className='bg-black text-white rounded-lg my-20 p-5 shadow-2xl space-y-3'>
                        <h1 className='text-3xl font-semibold '>Categories </h1>
                        <hr />
                        <p data-aos="fade-up">Travel</p>
                        <hr />
                        <p data-aos="fade-up">Tips</p>
                        <hr />
                        <p data-aos="fade-up">Stories</p>
                        <hr />
                        <p data-aos="fade-up">Destination</p>
                    </div>

                    {/* ask faq */}
                    <div className='bg-white text-black py-10 rounded-lg my-20 p-5 shadow-2xl space-y-3'>
                        <h1 className='text-2xl font-bold'>Have Any Question ?</h1>
                        <p className='text-gray-400'>Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.</p>
                        <h1 className='font-semibold'>Phone : O1820921814</h1>
                        <h1 className='font-semibold'>Email : tiyonbhuiyan.201@gmail.com</h1>
                    </div>
                </div>
            </div>
                        <hr />
            {/* post blog */}

            <h1 className=' text-center text-4xl my-5 '> Post A Blog for travel tips and Insights.</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className="border rounded p-2 w-full bg-white"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2">Comment:</label>
        <textarea
          id="comment"
          {...register('comment', { required: true })}
          className="border rounded p-2 w-full  bg-white "
        ></textarea>
        {errors.comment && <p className="text-red-500">Comment is required</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">Image URL:</label>
        <input
          type="url"
          id="image"
          {...register('image', { required: true })}
          className="border rounded p-2 w-full  bg-white "
        />
        {errors.image && <p className="text-red-500">Image URL is required</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>




            <ConnectedUs />
        </div>
    );
};

export default Blog;
