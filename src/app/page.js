import React from "react";
import "./Global.css";
import Header from "../../components/header/Header";
import HomeHeroSection from "../../components/body/home/HomeHeroSection";
const Home = () => {
  return (
    <main>
      <Header />
      <HomeHeroSection />
    </main>
  );
};

export default Home;
