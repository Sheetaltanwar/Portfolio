import React from "react";
import { IoArrowForward } from "react-icons/io5";
import avatarImg from "C:/Users/pc3/Desktop/portfolio/portfolio/src/assets/7358653-removebg-preview.png";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap justify-center bg-slate-950 shadow-xxl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center ">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row mt-20">
          <img className=" h-60 md:h-80" src={avatarImg} alt=" " />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a Frontend Developer, I speciliaze in crafting
                  responsive, user-friendly web applications using modern web
                  technologies.My expertise spans HTML,CSS,Javascript and
                  frameworks like React .
                </p>
              </span>
            </div>

            {/* <div className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1"/>
                    <span className="w-96">
                        <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database Developer</h1>
                        <p className="text-sm md:text-md leading-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, sunt.</p>
                    </span>
                </div> */}

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Familiar with Backend development ,experienced in building scalable APIs
                  and server-side applications using Node.js, Express.js,
                  MongoDB, and Mongoose. Strong focus on performance, data
                  modeling, and clean, maintainable code.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
