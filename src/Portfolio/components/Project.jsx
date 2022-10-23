import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HireButton from "../../Shared/components/HireButton";
import ProjectCarousel from "./ProjectCarousel";
import ProjectContext from "../../context/ProjectContext";

const Project = () => {
  const { projects, getProjects, loading } = useContext(ProjectContext);
  const [project, setProject] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [projId, setProjId] = useState();
  const load = useRef(true);
  const { id } = useParams();

  const findProject = async (id) => {
    setIsLoading(true);
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/project/` + id)
      .then((response) => {
        setProject(response.data.project);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (load.current) {
      setProjId(id);
      findProject(id);
      getProjects();
      load.current = false;
    }

    if (projId !== id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setProjId(id);
      findProject(id);
      getProjects();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [findProject, id]);

  return (
    <>
      {loading && "loading"}
      <div className="mx-xsm md:mx-md mt-md relative z-0">
        <h2 className="font-title  font-bold text-subHeaderM md:text-subHeader mb-sm md:w-[75%] ">
          {project.title}
        </h2>

        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="w-[75%]"
        >
          <div
            style={{ backgroundImage: `url(${project.imageUrl})` }}
            className="w-full  min-h-[600px] bg-[length:1900px_auto] bg-no-repeat my-md hover:scale-[1.02] transition ease-in-out delay-100 border-[3px] border-blue"
          ></div>
        </a>
        <div className="flex flex-col justify-center  ">
          <div className="w-full md:w-half ">
            <h3 className="text-projectTitle font-header mb-sm">Description</h3>
            <p className="text-para font-body font-light">
              {project.description}
            </p>
            <div className="w-[50%] flex justify-between my-md">
              <a
                href={`${project.websiteUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-auto px-sm md:px-md py-xsm  bg-black rounded-tr-small rounded-bl-small text-white drop-shadow-button">
                  Visit Site
                </button>
              </a>
              <HireButton classProps="w-auto px-sm md:px-md py-xsm " />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-xsm md:mx-md mt-md">
        <h2 className="text-subHeader font-header mb-sm">More Projects</h2>
        <ProjectCarousel projects={projects} loading={loading} />
      </div>
    </>
  );
};

export default Project;
