import type { NextPage } from "next";
import NavBar from "./NavBar";
import LandingP from "./LandingP/LandingP";

const Home: NextPage = () => {
  return (
    <div className="flex-col">
      <NavBar />
      <LandingP />
    </div>
  );
};

export default Home;
