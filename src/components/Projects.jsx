import React from 'react';
import { data } from "../data/data.js";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

const Project = (props) => {
  return (
    <motion.div
      className="px-12 py-8  transform border rounded-xl shadow-md  shadow-[#046ab3] group hover-scale-110 hover:border-sky-300  hover:shadow-sky-300   duration:300 "
      whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt=""
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white">
            {props.name}
          </h1>
          
        </div>
      </div>
      <div className="text-center justify-center inline-center ">
        {props.github ? (
          <a href={props.github} target="_blank">
            <AiFillGithub
              size="2rem"
              className="text-white mr-1 hover:text-teal-200"
            ></AiFillGithub>
          </a>
        ) : (
          ""
        )}
      </div>
      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins">
        {props.text}
      </p>

    
      <p className="font-poppins text-sky-300 text-dimWhite mt-3">
            Tech Stack
          </p>
          <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            <div className="flex sm:flex-row">
              {props.stack.map((tech, index) => (
                <div
                  key={tech.id}
                  index={index}
                  className="text-dimWhite mr-5 text-[10px] md:text-[15px] hover:text-teal-200 tooltip"
                >
                  <span class="tooltiptext">{tech.name}</span>
                </div> 
           ))}
             </div>
          </p>
    </motion.div>
  );
};
const Work = () => {
    const project = data;
  
  return (
    <div name='projects' className=''>
   
      <div className='max-w-[1000px] mx-auto px-4  w-full bg-[#000f26] md:h-full justify-center items-center text-center'>
        <div className='pb-8 '>
          <p className='text-6xl font-bold inline   border-b-4 text-gray-300 border-sky-600'>
           Projects
          </p>
        </div>

        <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2  " >
          {project.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div> 
      </div>
    </div>
       );
};

export default Work;
