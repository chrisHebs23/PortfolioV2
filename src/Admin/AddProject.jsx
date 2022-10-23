import axios from "axios";
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";

import ProjectForm from "./components/ProjectForm";
import { useForm } from "./components/useForm";

const AddProject = () => {
  const { token } = useContext(AdminContext);
  const { validation } = useForm();
  const initialData = {
    title: "",
    imageUrl: "",
    description: "",
    category: "",
    websiteUrl: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setErrorMessage(validation(formData));

    if (Object.keys(errorMessage).length > 0) {
      return console.log("hit");
    }
    await axios({
      method: "post",
      data: formData,
      url: `${process.env.REACT_APP_BACKEND_URL}/project`,
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

    setLoading(false);
  };

  return (
    <div className="m-xsm md:m-md">
      <h2>Add Project</h2>
      <ProjectForm
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        handleChange={handleChange}
        formData={formData}
        isLoading={isLoading}
        type={"Submit"}
      />
    </div>
  );
};

export default AddProject;
