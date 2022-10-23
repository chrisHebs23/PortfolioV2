import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";

const ProjectDisplay = () => {
  const { projects } = useContext(ProjectContext);
  const [projectData, setProjectData] = useState([]);
  const load = useRef(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterThree = () => {
    setProjectData(projects.filter((i, index) => index < 3));
  };

  useEffect(() => {
    if (load && projects) {
      filterThree();
      load.current = false;
    }
  }, [filterThree, projects]);

  return (
    <div className="mb-md">
      {projectData.map((i, index) => (
        <div
          key={index}
          className={`grid grid-cols-3 grid-rows-3  gap-4 grid-flow-row my-lg `}
        >
          <div
            className={`w-full col-span-3 md:col-span-2 row-span-2 md:row-span-3  bg-[length:200%_auto]  md:bg-cover bg-no-repeat rounded-small border-[3px] border-blue bg-left drop-shadow-poster min-h-[360px] max-h-[850px] hover:`}
            style={{ backgroundImage: `url(${i.imageUrl})` }}
          ></div>
          <div
            className={`md:row-start-2 ${
              index % 2 !== 0 ? "md:col-start-1" : "md:col-start-3"
            } col-span-3 md:col-span-1 w-auto flex flex-col justify-center w-full `}
          >
            <h3 className="font-header text-projectTitle font-bold mb-sm">
              {i.title}
            </h3>
            <p className="font-body text-paraM md:text-para  ">
              {i.description}
            </p>
            <div className="flex flex-wrap w-full mt-sm ">
              <a href={i.link} target="_blank" rel="noreferrer">
                <button className="bg-black w-auto px-[30px] py-[6px] mr-lg font-body text-paraM md:text-para text-white rounded-tr-medium rounded-bl-medium drop-shadow-button mb-sm flex-shrink">
                  Visit Site
                </button>
              </a>

              <Link to={`/portfolio/${i.id}`} state={{ id: i.id }}>
                <button className="bg-gray-600 w-auto px-[30px] py-[6px]  font-body text-paraM md:text-para text-white rounded-tr-medium rounded-bl-medium drop-shadow-button">
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;
