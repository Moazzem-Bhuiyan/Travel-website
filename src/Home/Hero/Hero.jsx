const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/K0hp7MX/select.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <h1 className="text-6xl font-bold text-white -mt-60">
          Make in your Journey
        </h1>
        <input
          type="search"
          name=""
          className="w-1/2 bg-white py-2 -mt-5 rounded-md"
          id=""
        />
      </div>
    </div>
  );
};

export default Hero;
