import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Hero";
import SocialLink from "../components/comon/SocialLink";
import Authors from "../components/About/AuthorEx";
import Mission from "../components/About/Mission.about";
import Team from "../components/About/Team.about";
import Contact from "../components/About/Contact.about";
import Process from "../components/About/Process.about";

const About = () => {
  return (
    <div>
      <Header />
      <Hero
        title="Modern Furniture"
        subtitle="WELCOME TO OUR COLLECTION"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
      />
      <Mission />
      <Team />
      <Process />
      <Authors />
      <Contact />
      <SocialLink />
      <Footer />
    </div>
  );
};

export default About;
