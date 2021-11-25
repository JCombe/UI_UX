import React from "react";
import DashboardCont from "./DashboardComps/DashboardCont";
import DashboardSidebar from "./DashboardComps/DashboardSidebar";
import VertNavBar from "./DashboardComps/VertNavBar";

const Dashboard = () => {
  return (
    <div className="flex">
      <VertNavBar />
      <DashboardCont />
      <DashboardSidebar />
    </div>
  );
};

export default Dashboard;
