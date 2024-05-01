import React from "react";
import "./Global.css";
import Header from "../../components/header/Header";
import HomeHeroSection from "../../components/body/home/HomeHeroSection";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <main>
      <Header />
      <HomeHeroSection />
      <Footer />
    </main>
  );
};

export default Home;
