import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const BlogForm = ({
  handleSubmit,
  blogData,
  handleChange,
  editorRef,
  handleEditorChange,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-sm">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            id="title"
            type="text"
            value={blogData.title}
            placeholder="The great title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Image Url</label>
          <input
            id="imageUrl"
            type="text"
            value={blogData.imageUrl}
            placeholder="www.greatpic.com"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Author</label>
          <input
            id="author"
            type="text"
            value={blogData.author}
            placeholder="Shaking Spear JR"
            onChange={handleChange}
          />
        </div>
        <div className=" col-span-2">
          <label>Content</label>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            textareaName="text"
            value={blogData.text}
            apiKey="i3hnyl8nszs7ia9ieqtfg92t28bn7m8tiz6tb3pyit18dnw4"
            onEditorChange={handleEditorChange}
            placeholder="Text goes here"
            init={{
              height: 500,
              menubar: false,
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <button type="submit" className="w-[20%] bg-blue">
          Post
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
