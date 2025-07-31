import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && Password) {
      setUser({ username, Password });
      setUsername("");
      setPassword("");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
     <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
