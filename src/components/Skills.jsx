import React from 'react';
import { motion } from 'framer-motion';
import skills from '../data/skills.js'
const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[#000f26] text-gray-300 mb-4 pb-8'>
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full '>
      <div className='pb-8'>
              <p className='text-6xl font-bold inline border-b-4   border-sky-600 '>Skills</p>
  
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pb-8 text-center py-8'>
            {skills.map((skill) => (
                <div className='shadow-md  shadow-[#046ab3] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={skill.image} alt="" />
                    <p className='my-4'>{skill.name}</p>
              </div>

            ))}

          </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Skills;
