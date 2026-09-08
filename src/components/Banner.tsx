import bg from "../assets/bg-shadow.png";
import banner from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="relative flex justify-center max-w-7xl mx-auto">
      <img src={bg} alt="Banner" className="w-full mt-10 rounded-xl" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <img src={banner} alt="Logo" />

        <h1 className="text-5xl font-bold">AIUB Premier League</h1>

        <p className="mt-2 text-2xl">Build Your Dream Team</p>

        <button className="btn btn-info mt-5 text-lg">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;
