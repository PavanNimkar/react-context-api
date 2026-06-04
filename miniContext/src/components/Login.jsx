import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login to your account</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
