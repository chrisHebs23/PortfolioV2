import React, { useContext, useEffect, useRef, useState } from "react";

import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BlogForm from "./components/BlogForm";

const EditBlogPost = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const { token } = useContext(AdminContext);
  const editorRef = useRef(null);
  // const initialData = {
  //   title: "",
  //   imageUrl: "",
  //   author: "",
  //   text: "",
  // };
  const [blogData, setBlogData] = useState();
  const [errorMessages, setErrorMessages] = useState({});

  const handleEditorChange = () => {
    setBlogData({ ...blogData, text: editorRef.current.getContent() });
  };

  const handleChange = (e) => {
    // let name = e.target.name ?

    setBlogData({ ...blogData, [e.target.id]: e.target.value });
  };

  const validate = (values) => {
    const error = {};
    if (!values.title) {
      error.title = "Please enter a valid title";
    }
    if (!values.imageUrl) {
      error.title = "Please enter a valid title";
    }
    if (!values.author) {
      error.title = "Please enter a valid title";
    }
    if (!values.text) {
      error.title = "Please enter a valid title";
    }
    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessages(validate(blogData));
    console.log(Object.keys(errorMessages).length);
    if (Object.keys(errorMessages).length !== 0) {
      return console.log(errorMessages);
    }
    await axios({
      method: "patch",
      data: blogData,
      url: `${process.env.REACT_APP_BACKEND_URL}/blog/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      console.log(response);
      return navigate("/");
    });
  };

  const findBlogPost = async (id) => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/blog/${id}`,
    }).then((response) => {
      setBlogData(response.data.blogPost);
    });
  };

  useEffect(() => {
    if (!blogData) {
      findBlogPost(id);
    }
  });

  return (
    <div className="m-md">
      Create Post
      {blogData && (
        <BlogForm
          blogData={blogData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editorRef={editorRef}
          handleEditorChange={handleEditorChange}
        />
      )}
    </div>
  );
};

export default EditBlogPost;
