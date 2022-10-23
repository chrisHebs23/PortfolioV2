import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProjectForm from "./components/ProjectForm";
import { AdminContext } from "../context/AdminContext";

const EditProject = () => {
  const { token } = useContext(AdminContext);
  const [formData, setFormData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const { id } = useParams();
  console.log(useParams().id);

  const findProject = async (id) => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/project/` + id)
      .then((response) => {
        setFormData(response.data.project);
      })
      .catch((err) => {
        setErrorMessage(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (!formData) {
      findProject(id);
    }
  }, [formData, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    await axios({
      method: "patch",
      data: formData,
      url: `${process.env.REACT_APP_BACKEND_URL}/project/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="m-xsm md:m-md">
      <h2>Edit Project</h2>
      {formData && (
        <ProjectForm
          formData={formData}
          isLoading={isLoading}
          errorMessage={errorMessage}
          type={"Update"}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default EditProject;
