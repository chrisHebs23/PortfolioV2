import React, { useContext, useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import ProjectCards from "./ProjectCards";

const ProjectCarousel = ({ projects, loading }) => {
  const [projectData, setProjectData] = useState({});
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const load = useRef(true);
  const carousel = useRef();
  const { id } = useParams();

  const slide = (shift) => {
    carousel.current.scrollLeft += shift;
    scrollCheck();
  };
  const scrollCheck = () => {
    setScrollX(carousel.current.scrollLeft);

    if (
      carousel.current.offsetWidth >=
      carousel.current.scrollWidth - carousel.current.scrollLeft
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  useEffect(() => {
    if (load && !loading) {
      setProjectData(projects.filter((project) => project.id !== id));
      load.current = false;
    }
  }, [id, loading, projects]);

  return (
    <div className="relative my-md ">
      <p className="font-body text-error flex">
        Scroll &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[25px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </p>
      <div className="w-full h-hire absolute  top-[45%] z-30 hidden md:flex justify-between">
        <button
          className="w-[50px] h-[50px] bg-white/20 rounded-big"
          onClick={() => slide(-1000)}
          disabled={scrollX === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button
          className="w-[50px] h-[50px] bg-white/20 rounded-big"
          onClick={() => slide(1000)}
          disabled={scrollEnd}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>

      <div
        ref={carousel}
        className="relative flex flex-row overflow-x-scroll w-full scroll-smooth snap-x"
      >
        {Object.keys(projectData).length > 0 &&
          projectData.map((p, index) => (
            <>
              <div
                key={p._id + index}
                className={`min-w-full md:min-w-[50%] ${
                  index === 0 ? "mr-sm" : "mx-sm"
                } my-sm`}
              >
                <ProjectCards project={p} />
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
