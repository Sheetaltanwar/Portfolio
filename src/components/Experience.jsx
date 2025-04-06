import React from 'react'
import{ FaCss3,FaFigma,FaHtml5,FaJs, FaReact} from "react-icons/fa";

import {FaGoogle} from 'react-icons/fa';
 import {SiMongodb} from "react-icons/si";
import {RiNetflixFill} from "@remixicon/react";
import { FaAmazon } from 'react-icons/fa';

const Experience = () => {
  return (
    <div id="Experience" className='p-10 md:p-24 '>
        <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around mt-10 md:mt-20'>
           <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 p-0'>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color="#E34F26" size={50}></FaHtml5>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color="#1572b6" size={50}></FaCss3>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color="#61DAFB" size={50}></FaReact>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color="#F7DF1E" size={50}></FaJs>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaFigma color="#F24E1E" size={50}></FaFigma>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <SiMongodb color="green" size={50}></SiMongodb>
           </span>
           <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
           <img width="48" style={{backgroundColor:'#F7DF1E"'}}height="48" src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/>
           </span>
           </div> 

           <div >
            <ul  style={{fontSize:'30px',color:'white'}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Express</li>
                <li>Mongodb</li>
                </ul>
            {/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center text-white'>
                <FaGoogle color="#4285F4" size={40}/>
                <span>
                    <h2 className='leading-tight'>Software Engineer ,google</h2>
                    <p className='text-sm leading-tight font-thin text-white'>Sept 2023 -present</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as Software developer </li>
                        <li>-Senior SDE developer</li>
                    </ul>
                </span>
            </div> */}

            {/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center text-white'>
                <RiNetflixFill color="#E50914" size={40}/>
                <span>
                    <h2 className='leading-tight'>Software Engineer ,google</h2>
                    <p className='text-sm leading-tight font-thin text-white'>Sept 2023 -present</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as Software developer </li>
                        <li>-Senior SDE developer</li>
                    </ul>
                </span>
            </div> */}

            {/* <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center text-white'>
                <FaAmazon color="#FF9900" size={40}/>
                <span>
                    <h2 className='leading-tight'>Software Engineer ,google</h2>
                    <p className='text-sm leading-tight font-thin text-white'>Sept 2023 -present</p>
                    <ul className='text-sm p-2'>
                        <li>- Work as Software developer </li>
                        <li>-Senior SDE developer</li>
                    </ul>
                </span>
            </div> */}
           </div>
        </div>


    </div>
  )
}

export default Experience