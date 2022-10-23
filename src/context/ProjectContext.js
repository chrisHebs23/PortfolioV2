import { createContext, useState } from "react";
import axios from "axios";

const ProjectContext = createContext();

export const projectReducer = (state, action) => {};

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/project`)
      .then((response) => {
        setProjects(response.data.projects);
      });
    setLoading(false);
  };

  // finds a single project

  return (
    <ProjectContext.Provider value={{ projects, getProjects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
