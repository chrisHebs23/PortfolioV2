import React, { useContext, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import BlogForm from "./components/BlogForm";

const CreateBlogPost = () => {
  const { token } = useContext(AdminContext);
  const editorRef = useRef(null);
  const initialData = {
    title: "",
    imageUrl: "",
    author: "",
    text: "",
  };
  const [blogData, setBlogData] = useState(initialData);
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
      method: "post",
      data: blogData,
      url: `${process.env.REACT_APP_BACKEND_URL}/blog`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  };

  return (
    <div className="m-md">
      Create Post
      <BlogForm
        blogData={blogData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editorRef={editorRef}
        handleEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default CreateBlogPost;
