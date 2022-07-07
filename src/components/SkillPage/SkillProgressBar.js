import React from "react";

export default function SkillProgressBar() {
  return (
    <div>
      <div className="flex items-center justify-between  ">
        <span className="text-base font-medium text-primary-dark">HTML5</span>
        <span className="text-sm font-medium text-primary-dark">70%</span>
      </div>

      <div className="w-auto bg-white rounded-full h-1.5">
        <div className="bg-gradient-to-r from-primary to-primary-light h-1.5 rounded-full w-64"></div>
      </div>
    </div>
  );
}
