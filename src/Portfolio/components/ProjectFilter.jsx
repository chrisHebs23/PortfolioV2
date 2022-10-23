import React from "react";

const ProjectFilter = ({ types, projType, handleFilter }) => {
  return (
    <div>
      <ul className="flex justify-between  md:w-[20%] my-sm">
        {types.map((type) => (
          <li
            key={type.name}
            className={`${
              projType.current === type.type ? "border-b-2 border-green" : ""
            } cursor-pointer`}
            onClick={() => handleFilter(type.type)}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFilter;
