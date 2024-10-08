import React, { useEffect } from 'react';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img1 from "../../assets/tour/1.png";
import img2 from "../../assets/tour/2.png";
import img3 from "../../assets/tour/3.png";
import img4 from "../../assets/tour/4.png";
import img5 from "../../assets/tour/5.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TourPatner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-20">
      <section>
        <SectionTitle
          heading={"Our Tour Partner"}
          subheading={
            "There are many variations of passage of lorem ipsum available but the majority have suffered alteration."
          }
        />
      </section>

      <div className="md:flex justify-evenly w-[90%] m-auto space-y-5">
        <img className="h-14" src={img1} alt="" data-aos="fade-up" data-aos-duration="1000" />
        <img className="h-13" src={img2} alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
        <img className="h-8" src={img3} alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" />
        <img className="h-9" src={img4} alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" />
        <img className="h-7" src={img5} alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" />
      </div>
    </div>
  );
};

export default TourPatner;
