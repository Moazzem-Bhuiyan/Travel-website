import Usedata from "../../Hooks/UseData/Usedata";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const NaturalSenary = () => {
  const { menu } = Usedata();
  return (
    <div className="my-20">
      <section>
        <SectionTitle
          heading={"Explore new worlds with exotic natural scenery"}
          subheading={
            "Explore the world with what you love beautiful natural beauty."
          }
        ></SectionTitle>
      </section>

      <div>
        <>
          <div className="hidden md:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper my-10 hover:scale-75 duration-1000"
          >
            {menu.map((data) => (
              <div className="">
                <SwiperSlide className="mb-20">
                  <img src={data.img} alt="" />
                  <h1 className="text-2xl my-2 font-bold">{data.name}</h1>
                  <p>{data.description}</p>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
          </div>
        <div className=" lg:hidden">
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper my-10 hover:scale-75 duration-1000  "
          >
            {menu.map((data) => (
              <div className="">
                <SwiperSlide className="my-10">
                  <img src={data.img} alt="" />
                  <h1 className="text-2xl my-2 font-bold">{data.name}</h1>
                  <p>{data.description}</p>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        </>
      </div>
    </div>
  );
};

export default NaturalSenary;
