import React from 'react'
import Projectcard from './Projectcard'
import Projectcard1 from './Projectcard1'
import Projectcard3 from './Projectcard3'
const projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5 '>
      <Projectcard/>
      <Projectcard1/>
      <Projectcard3/>
      </div>
    </div>
  )
}

export default projects

      