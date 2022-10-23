import React, { useContext, useEffect, useRef, useState } from "react";
import ProjectContext from "../../context/ProjectContext";
import ProjectCards from "../components/ProjectCards";
import ProjectFilter from "../components/ProjectFilter";

const Portfolio = () => {
  const { projects, getProjects } = useContext(ProjectContext);
  const [projectData, setProjectData] = useState(projects);
  const load = useRef(true);
  const types = [
    { name: "All", type: "all" },
    { name: "Apps", type: "app" },
    { name: "Designs", type: "design" },
    { name: "Websites", type: "website" },
  ];
  const projType = useRef("all");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilter = (t) => {
    projType.current = t;
    if (t !== "all") {
      return setProjectData(
        projects.filter((project) => project.category === t)
      );
    }
    return setProjectData(projects);
  };

  useEffect(() => {
    if (load.current) {
      getProjects();
      handleFilter(projType.current);
      load.current = false;
    }
    if (
      Object.keys(projects).length > 0 &&
      Object.keys(projectData).length === 0
    ) {
      handleFilter(projType.current);
    }
  }, [getProjects, handleFilter, projectData, projects]);

  return (
    <div className="m-sm md:m-md ">
      <h2 className="font-title font-bold text-subHeaderM md:text-subHeader mb-sm ">
        Portfolio
      </h2>
      <ProjectFilter
        types={types}
        projType={projType}
        handleFilter={handleFilter}
      />

      {/* Project Display Section */}
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-between">
        {Object.keys(projectData).length > 0 ? (
          projectData.map((project, index) => (
            <div
              className={`my-sm w-full  lg:max-w-[50%] ${
                index % 2 !== 0 ? "md:pl-sm" : "md:pr-sm"
              }`}
              key={project.id}
            >
              <ProjectCards project={project} getProjects={getProjects} />
            </div>
          ))
        ) : (
          <h2>No {projType.current}s yet </h2>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
