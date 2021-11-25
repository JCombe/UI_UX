import React from "react";
import { dashboardSidebarData } from "../../Data/ReplyData";

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col h-screen w-min items-center text-white justify-between p-16 bg-black rounded-lg">
      <h1 className="text-2xl mb-6">Sales Revenue</h1>
      <div className="flex flex-col justify-between">
        {dashboardSidebarData.map((sidebarData: any, idx: any) => (
          <div
            key={idx}
            className="flex w-full items-center justify-start mb-6"
          >
            <div className="w-6 h-6 mr-6">{sidebarData.icon}</div>
            <div>
              <h2 className="text-lg mb-4">{sidebarData.value}</h2>
              <h3 className="text-sm opacity-40">{sidebarData.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl">Statistics</h1>
        <div>Graph</div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
