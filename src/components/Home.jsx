import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div name='home' className='pt-12 w-full h-screen  bg-[#000f26]'>
      {/* Container */}
      <motion.div  whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
       className='max-w-[1000px] mx-auto px-8 py-8  flex flex-col justify-center h-full'>
        <p className='text-sky-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Tarun S Hegde
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Enthusiast.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am passionate about building excellent software that improves the lives of those around me.
         I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. 
         What would you do if you had a software expert available at your fingertips?
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-600 hover:border-sky-600'>
          <Link to='projects' smooth={true} duration={500}>
          View Projects
          </Link>
           
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
