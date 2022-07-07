import React from 'react'

export default function SkillProgressBar5() {
  return (
    <div className='md:px-5'>
      <div className="flex items-center justify-between text-primary-dark ">
        <span className="text-base font-medium ">
          Wordpress
        </span>
        <span className="text-sm font-medium" text->
          90%
        </span>
      </div>

      <div className="w-auto bg-white rounded-full h-1.5">
        <div className="bg-gradient-to-r from-lime-500 to-blue-600 h-1.5 rounded-full w-11/12"></div>
      </div>
    </div>
  );
}
