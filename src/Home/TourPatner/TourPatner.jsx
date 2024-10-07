import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img1 from "../../assets/tour/1.png";
import img2 from "../../assets/tour/2.png";
import img3 from "../../assets/tour/3.png";
import img4 from "../../assets/tour/4.png";
import img5 from "../../assets/tour/5.png";

const TourPatner = () => {
  return (
    <div className="my-20">
      <section>
        <SectionTitle
          heading={"our tour patner"}
          subheading={
            "There are many variation of passage of lorem ipsum available but the majority have suffered alteration "
          }
        ></SectionTitle>
      </section>

      <div className="md:flex justify-evenly w-[90%] m-auto space-y-5">
        <img className="h-16" src={img1} alt="" />
        <img className="h-14" src={img2} alt="" />
        <img className="h-10" src={img3} alt="" />
        <img className="h-10" src={img4} alt="" />
        <img className="h-10" src={img5} alt="" />
      </div>
    </div>
  );
};

export default TourPatner;
