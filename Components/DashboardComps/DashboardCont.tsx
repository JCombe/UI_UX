import React from "react";
import {
  dashboardDeviceData,
  dashboardOveralData,
  filterIcon,
} from "../../Data/ReplyData";

const DashboardCont = () => {
  return (
    <div className="flex flex-col pt-4 p-6 w-full h-screen justify-evenly items-center text-gray-900">
      <form action="" className="flex justify-start w-full mb-4">
        <input
          type="text"
          placeholder="Search for stats"
          className="flex justify-start border-2 border-gray-100 p-2 rounded-lg"
        />
      </form>
      <div className="flex w-full justify-between mb-4">
        <div className="flex flex-col">
          <h1 className="text-xl">Hello Username</h1>
          <h3 className="opacity-40 text-md">Welcome Back!</h3>
        </div>
        <button className="flex justify-between p-2 rounded-lg border-2 border-gray-100">
          <h3 className="opacity-40">Filter</h3>
          <div className="w-6 h-6">{filterIcon}</div>
        </button>
      </div>
      <div className="flex w-full justify-between p-6 rounded-lg bg-pink-200">
        {dashboardOveralData.map((data: any, idx: any) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-between mr-16"
          >
            <div className="w-6 h-6 mb-4">{data.icon}</div>
            <h4 className="text-sm opacity-40 mb-4">{data.title}</h4>
            <h2 className="text-lg mb-4">{data.value}</h2>
            <h4 className="text-sm opacity-40 mb-4">{data.unit}</h4>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-between w-full">
        {dashboardDeviceData.map((device: any, idx: any) => (
          <div
            key={idx}
            className="flex justify-between min-w-min-w-2/5 items-center bg-blue-200 rounded-lg p-6 m-2"
          >
            <div className="flex flex-col mr-10">
              <h2 className="text-lg">{device.title}</h2>
              <h3 className="text-lg opacity-40">{device.subTitle}</h3>
              <h2 className="text-lg">{device.value}</h2>
            </div>
            <div>{device.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCont;
