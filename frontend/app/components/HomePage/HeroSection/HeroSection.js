import Image from "next/image";
import HeroImage from "../../../../public/images/hero-img.svg";
import Link from "next/link";
import Lottie from 'lottie-react';
import animationData from '../../../json-data/character-circular.json';


const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#F6F7F6] lg:gap-[30px] md:gap-[22.76px]  p-[30px] 2xl:px-[60px] items-center justify-between ">
      <div className="lg:w-[448px] mt-[30px] md:mt-0 md:w-[369px]   2xl:w-[740px] flex flex-col md:justify-center  ">
        <h2 className="text-[#1C1C1C] text-4xl md:text-center lg:text-left lg:text-5xl 2xl:text-7xl md:text-[36px]  leading-[120%] tracking-[3.36px] font-serif">
          Change your career,{" "}
          <span className="text-[#FC7C13] lg:text-5xl md:text-[36px] 2xl:text-7xl  tracking-[3.36px] font-serif">
            change your life.
          </span>
        </h2>

        <p className="lg:w-[347px] 2xl:w-full md:w-[326px] mt-[15px] lg:text-[20px] 2xl:text-3xl md:text-[16px] font-Poppins text-[#1C1C1C] leading-[120%] text-opacity-[0.75]">
          Our bootcamp is designed to help people with little to no coding
          experience become high-earning software engineers.
        </p>

        <Link
          className="bg-[#FC7C13] p-[10px] 
            flex mt-[15px] w-[100%] h-[55px] 
            rounded-[10px] items-center 
            justify-center text-[#F7FCFE]
            text-[16px]
            font-Poppins
            font-medium
            transition duration-500 ease-in-out transform hover:-translate-y-1 lg:w-[195px] "
          href="/courses"
        >
          Browse Courses
        </Link>
      </div>

      <div className="flex">
      <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;
