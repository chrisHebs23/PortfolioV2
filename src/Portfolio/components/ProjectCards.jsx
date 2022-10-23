import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

import HireButton from "../../Shared/components/HireButton";

const ProjectCards = ({ project, getProjects }) => {
  const { token } = useContext(AdminContext);

  const handleDelete = async (id) => {
    await axios({
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND_URL}/project/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        getProjects();
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-grayM drop-shadow-poster rounded-tr-big rounded-bl-big overflow-hidden min-h-[600px] bg-no-repeat hover:tr">
      <Link to={`/portfolio/${project._id}`}>
        <div
          className="border-b-2  flex-1 border-blue max-h-[50%]  overflow-hidden min-h-[400px] bg-[length:900px_auto] hover:scale-105 transition ease-in-out delay-100"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        ></div>
      </Link>
      <div className="p-sm h-[50%] text-white flex-col flex ">
        <h3 className="font-header text-projectTitle font-bold mb-sm">
          {project.title}
        </h3>
        <p className="font-body font-thin text-paraM ">{project.description}</p>
        {token ? (
          <div className="w-[100%] h-[30px]   flex justify-between ">
            {/* Edit project button */}
            <Link to={`/admin/project/${project._id}`}>
              <button className="z-20 text-white hover:text-red-500 -top-0 left-0 w-[50px]  h-[50px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </Link>
            {/* Delete project button */}
            <button
              className="z-20 text-gray hover:text-red-500 w-[50px] h-[50px]"
              onClick={() => handleDelete(project._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="mt-md  flex flex-row justify-between justify-self-end">
            <a href={`${project.websiteUrl}`} target="_blank" rel="noreferrer">
              <button className="w-auto px-sm md:px-md py-xsm  bg-black rounded-tr-small rounded-bl-small drop-shadow-button">
                Visit Site
              </button>
            </a>
            <HireButton classProps="w-auto px-sm md:px-md py-xsm " />
            <Link to={`/portfolio/${project._id}`}>
              <button className="w-auto px-sm md:px-md py-xsm font-header bg-gray-600 rounded-tr-small rounded-bl-small drop-shadow-button">
                More Info
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
