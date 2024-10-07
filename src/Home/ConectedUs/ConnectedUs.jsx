const ConnectedUs = () => {
  return (
    <div className="my-20">
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/2FqWJsc/unsplash-Tej-Fa7-VW5e4.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <h1 className="text-5xl font-bold text-white -mt-60 p-5">
          Subscribe to get speical price
        </h1>

        <div className=" md:w-1/2 flex bg-white py-1 md:px-2 -mt-5 rounded-full">
          <input
            type="search"
            name=""
            placeholder="Enter your email"
            className="w-full outline-none bg-white py-1 mt-1 px-2  rounded-full"
            id=""
          />
          <button className="btn text-white rounded-full">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectedUs;
