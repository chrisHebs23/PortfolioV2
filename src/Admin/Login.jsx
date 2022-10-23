import React, { useContext, useState } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";

const Login = () => {
  const auth = useContext(AdminContext);
  const initialData = { username: "", password: "" };
  const [formData, setFormData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState(initialData);

  const universalStyle =
    " bg-black/0 w-full rounded-small drop-shadow-inputBox  p-xsm placeholder:italic placeholder:text-gray-600/50 ";
  const noErrorStyle = " border-blue border-2 h-input";
  const errorInputStyles = " border-rose-500 border-2 ";

  // Handle sign up validation
  const handleValidation = () => {
    if (formData.username === "" && formData.password === "") {
      return false;
    }
    return true;
  };

  // login in admin function
  const adminLogin = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/admin/login`, {
          username: formData.username,
          password: formData.password,
        })
        .then((response) => {
          auth.login(response.data.userId, response.data.token);
        })
        .catch((err) => {
          setErrorMessage(err);
        });
    }
  };

  return (
    <div className="m-sm md:m-md">
      <h2 className="font-title font-bold text-subHeaderM md:text-subHeader mb-sm text-black">
        Login
      </h2>
      <form onSubmit={adminLogin}>
        <div className="flex flex-col ">
          <div className="my-sm">
            <label>User Name</label>
            <input
              type="text"
              value={formData.username}
              placeholder="User Name"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className={`${universalStyle} ${
                errorMessage.username === "" ? noErrorStyle : errorInputStyles
              }`}
            />
          </div>
          <div className="my-sm">
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`${universalStyle} ${
                errorMessage.password === "" ? noErrorStyle : errorInputStyles
              }`}
            />
            <button
              className="my-sm text-white bg-gradient-to-r from-green to-blue  font-body text-para rounded-bl-small rounded-tr-small drop-shadow-hireButton px-sm py-xsm"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
