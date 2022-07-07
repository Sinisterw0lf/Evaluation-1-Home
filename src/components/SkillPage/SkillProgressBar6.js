import React from 'react'

export default function SkillProgressBar6() {
  return (
    <div>
      <div className="flex items-center justify-between text-primary-dark">
        <span className="text-base font-medium ">PHP/Laravel</span>
        <span className="text-sm font-medium " >
          100%
        </span>
      </div>

      <div className="w-auto bg-white rounded-full h-1.5">
        <div className="bg-gradient-to-r from-rose-800 to-orange-400 h-1.5 rounded-full w-full"></div>
      </div>
    </div>
  );
}
