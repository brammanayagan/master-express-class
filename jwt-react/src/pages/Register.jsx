import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerPost = await axios.post("", registerData);
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Enter Username"
          value={registerData.userName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={registerData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={registerData.password}
          onChange={handleChange}
        />
        <input type="submit" value={"Login"} />
      </form>
    </>
  );
};

export default Register;
