import React from "react";

const ProjectForm = ({
  formData,
  handleChange,
  errorMessage,
  handleSubmit,
  isLoading,
  type,
}) => {
  const universalStyle =
    " bg-black/0 w-full rounded-small drop-shadow-inputBox  p-xsm placeholder:italic placeholder:text-gray-600/50 ";
  const noErrorStyle = " border-blue border-2 h-input";
  const errorInputStyles = " border-rose-500 border-2 ";

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            id="Title"
            name="title"
            value={formData.title}
            type="text"
            onChange={handleChange}
            className={`${universalStyle} ${
              !errorMessage.title ? noErrorStyle : errorInputStyles
            }`}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            id="Image"
            name="imageUrl"
            value={formData.imageUrl}
            type="text"
            onChange={handleChange}
            className={`${universalStyle} ${
              !errorMessage.imageUrl ? noErrorStyle : errorInputStyles
            }`}
          />
        </div>
        <div className="col-span-2">
          <label>Description</label>
          <textarea
            id="Description"
            name="description"
            value={formData.description}
            type="text"
            onChange={handleChange}
            className={`${universalStyle} ${
              !errorMessage.description ? noErrorStyle : errorInputStyles
            } h-[100px]`}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            id="Category"
            name="category"
            value={formData.category}
            type="text"
            onChange={handleChange}
            className={`${universalStyle} ${
              !errorMessage.category ? noErrorStyle : errorInputStyles
            }`}
          />
        </div>
        <div>
          <label>Website Url</label>
          <input
            id="WebsiteUrl"
            name="websiteUrl"
            value={formData.websiteUrl}
            type="text"
            onChange={handleChange}
            className={`${universalStyle} ${
              !errorMessage.websiteUrl ? noErrorStyle : errorInputStyles
            }`}
          />
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="my-sm text-white bg-gradient-to-r from-green to-blue  font-body text-para rounded-bl-small rounded-tr-small drop-shadow-hireButton px-sm py-xsm"
        >
          {type}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
