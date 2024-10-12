import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "../Testomonial/testomonial.css"; // Your custom CSS

import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testomonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("./review/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
    
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <div className="my-20 testomonial-swiper bg-slate-50 py-10">
      <div className="p-4 space-y-2">
        <h1 className="uppercase text-2xl" data-aos="fade-up" data-aos-duration="1000">Testomonial</h1>
        <h1 className="text-4xl font-bold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">What Our client say</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Create a visual identity for your company and a overall brand</p>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {review.map((review) => (
          <SwiperSlide key={review.id}>
            <p className="text-center mt-5 text-3xl">{review.name}</p>
            <p className="text-center mt-10 text-sm p-5">
              {review.description}
            </p>

            <div className="flex justify-center">
              <Rating
                className=""
                name="read-only"
                value={review.rating}
                readOnly
                precision={0.5} // Adjust this if you want half ratings
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testomonial;
