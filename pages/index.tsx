import type { NextPage } from "next";
import NavBar from "../Components/NavBar/NavBar";
import LandingP from "../Components/LandingP/LandingP";

const Home: NextPage = () => {
  return (
    <div className="flex-col">
      <NavBar />
      <LandingP />
    </div>
  );
};

export default Home;
