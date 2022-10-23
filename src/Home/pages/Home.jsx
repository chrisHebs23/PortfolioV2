/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import HomeBanner from "../components/HomeBanner";
import ProjectsSection from "../components/ProjectsSection";
import EnjoyMyWork from "../components/EnjoyMyWork";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"></meta>
        <title>Chris Heberden || Home</title>
      </Helmet>
      <HomeBanner />
      <ProjectsSection />
      <EnjoyMyWork />
    </div>
  );
};

export default Home;
