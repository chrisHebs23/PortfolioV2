import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LoadingIcon from "../../Shared/components/LoadingIcon";

const ProjectDisplay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const load = useRef(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterThree = async () => {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/project/`,
    })
      .then((response) => {
        setProjectData(response.data.projects.filter((i, index) => index < 3));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (load.current) {
      filterThree();
      load.current = false;
    }
  }, [filterThree]);

  return (
    <div className="mb-md">
      {/* && projectData.length > 0 ? */}
      {!isLoading ? (
        projectData.map((i, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse " : "md:flex-row"
            } my-lg `}
          >
            <div
              className={` md:w-[70%] bg-[length:250%_auto] bg-left-top md:bg-cover bg-no-repeat rounded-small border-[3px] border-blue  drop-shadow-poster min-h-[360px] md:min-h-[500px] hover:scale-[1.02] transition ease-in-out delay-75 mb-md`}
              style={{ backgroundImage: `url(${i.imageUrl})` }}
            ></div>
            <div
              className={`md:w-[30%] md:row-start-2  ${
                index % 2 !== 0 ? "md:mr-md" : "md:ml-md"
              } w-auto flex flex-col justify-center w-full `}
            >
              <h3 className="font-header text-projectTitle font-bold mb-sm">
                {i.title}
              </h3>
              <p className="font-body text-paraM md:text-para  ">
                {i.description}
              </p>
              <a
                href={`/portfolio/${i.id}`}
                className="text-error underline underline-offset-2 hover:text-blue"
              >
                Learn more about {i.title}
              </a>
              <div className="flex flex-wrap w-full mt-sm ">
                <a href={i.link} target="_blank" rel="noreferrer">
                  <button className="bg-black w-auto px-[30px] py-[6px] mr-lg font-body text-paraM md:text-para text-white rounded-tr-medium rounded-bl-medium drop-shadow-button mb-sm flex-shrink">
                    Visit Site
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <LoadingIcon />
      )}
    </div>
  );
};

export default ProjectDisplay;
