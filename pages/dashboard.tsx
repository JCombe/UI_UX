import React from "react";
import DashboardCont from "../Components/DashboardComps/DashboardCont";
import DashboardSidebar from "../Components/DashboardComps/DashboardSidebar";
import VertNavBar from "../Components/DashboardComps/VertNavBar";

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
