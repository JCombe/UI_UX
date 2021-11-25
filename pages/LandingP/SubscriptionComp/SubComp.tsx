import React from "react";

const SubComp = ({ subComp }: any) => {
  return (
    <div
      className={`flex flex-col rounded-md ${
        subComp.idx === 0 ? "rounded-tl-3xl" : "rounded-tr-3xl"
      } text-white p-4 m-4 items-center bg-blue-300 bg-opacity-20 backdrop-filter backdrop-blur-xl`}
    >
      <div className="w-14 h-14 mb-4">{subComp.icon}</div>
      <h2 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-xl font-bold mb-2">
        {subComp.title}
      </h2>
      <p className="">{subComp.descr}</p>
    </div>
  );
};

export default SubComp;
