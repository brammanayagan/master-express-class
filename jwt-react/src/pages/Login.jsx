import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const setdata = await axios.post("", loginData);

      setLoginData({ email: "", password: "" });

      localStorage.setItem("jwttoken", setdata.data.token);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={loginData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={loginData.password}
          onChange={handleChange}
        />
        <input type="submit" value={"Login"} />
      </form>
    </>
  );
};

export default Login;
