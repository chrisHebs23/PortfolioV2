/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import HomeBanner from "../components/HomeBanner";
import ProjectsSection from "../components/ProjectsSection";
import EnjoyMyWork from "../components/EnjoyMyWork";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <ProjectsSection />
      <EnjoyMyWork />
    </div>
  );
};

export default Home;
