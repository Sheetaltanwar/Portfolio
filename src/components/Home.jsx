import React from "react";
import avatarImg from "C:/Users/pc3/Desktop/portfolio/portfolio/src/assets/7358602-removebg-preview.png";
export const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hii , I am Sheetal
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Creative and detail-oriented web developer specializing in crafting
          responsive, user-friendly interfaces. Strong understanding of web
          architecture Experienced in building dynamic interfaces and
          maintaining clean, scalable code. Familiar with backend development
          and database integration to support full-stack functionality.
        </p>
      </div>
      <div className="flex">
        <img className="w-5/5" src={avatarImg} alt=" " />
      </div>
    </div>
  );
};
