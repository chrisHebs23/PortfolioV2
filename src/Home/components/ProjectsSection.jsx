import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "../../context/ProjectContext";
import ProjectDisplay from "./ProjectDisplay";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { projects, getProjects } = useContext(ProjectContext);
  // const {newProjects, setNewProject} = useContext(projects)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      getProjects();
      setLoaded(true);
    }
  }, [getProjects, loaded, projects]);

  return (
    <div className="mx-xsm lg:mx-md">
      <h2 className="font-title font-bold text-subHeaderM md:text-subHeader mb-sm ">
        Recent Websites
      </h2>
      <p className="font-body font-normal text-paraM md:text-para">
        Below are a few of my most recent projects from Websites, to Apps and
        Design Concepts
      </p>
      <ProjectDisplay />

      <div className="flex w-full justify-center mt-md mb-xlg">
        <Link to="/portfolio">
          <button className="text-white bg-gradient-to-r from-green to-blue text-para  font-body rounded-bl-small rounded-tr-small drop-shadow-hireButton  py-xsm px-md">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
