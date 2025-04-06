import React from "react";
// import imga from "C:/Users/pc3/Desktop/vse hi/project2/portfolio/src/assets/nature-3082832_1920.jpg"
const Projectcard = () => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#c0e19] shadow-xl shadow-slate-900 rounded-2xl bg-slate-950">
      {/* <img className='p-4 'src={imga} alt=" "/> */}
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        Portfolio{" "}
      </h3>
      <p className="px-4 text-m md:text-md leading-tight py-2">
        Responsive portfolio website featuring interactive project showcases and
        a clean, modern design. Built with a component-based architecture to
        ensure scalability and maintainability. Styled using a utility-first
        approach for fast, consistent, and mobile-friendly development.
      </p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="https://github.com/Sheetaltanwar/Amazon-Clone.git">
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default Projectcard;
