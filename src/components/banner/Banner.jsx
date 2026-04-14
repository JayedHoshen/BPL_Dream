import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className="mt-6 bg-[#131313] container mx-auto rounded-2xl">
      <div
        style={{
          backgroundImage: ` url(${bannerBg})`,
        }}
        className={`bg-cover bg-center px-4 py-16 flex flex-col justify-center items-center space-y-4 rounded-2xl`}
      >
        <img className="max-w-50" src={bannerImg} alt="banner-images" />
        <h1 className="font-bold text-xl lg:text-4xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-lg lg:text-2xl text-white/70">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn rounded-md bg-linear-to-r from-pink-300 via-yellow-200 to-yellow-400 shadow-md shadow-yellow-200/40 hover:bg-linear-to-l">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
