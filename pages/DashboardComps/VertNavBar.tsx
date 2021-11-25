import React from "react";
import { replyLogo } from "../../Data/ReplyData";
import { vertNavBarItems } from "../../Data/ReplyData";

const VertNavBar = () => {
  return (
    <div className="flex flex-col justify-between border-r-2 w-min border-gray-100 align-middle text-gray-700 h-screen p-6">
      <div className="flex flex-col">
        <div className="W-16 h-16 text-gray-600 mb-10">{replyLogo}</div>
        {vertNavBarItems.map((item: any, idx: any) => (
          <div className="flex w-full justify-start mb-6">
            <div className="mr-6">{item.icon}</div>
            <h1 className="text-md">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-end">
        <div className="relative p-1 border-2 rounded-xl border-gray-100 mb-2">
          <div className="w-14 h-14 bg-user-icon rounded-xl bg-cover bg-center" />
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rounded-full bg-green-400 w-4 h-4" />
        </div>
        <h3 className="text-gray-900 font-bold text-sm">User Name</h3>
      </div>
    </div>
  );
};

export default VertNavBar;
