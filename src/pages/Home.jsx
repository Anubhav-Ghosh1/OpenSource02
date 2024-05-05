import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Community from "../components/Community";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Footer />
    </div>
  );
}

export default Home;
