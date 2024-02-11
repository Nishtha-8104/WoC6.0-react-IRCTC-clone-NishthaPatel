import React, { useState, useEffect } from "react";
import SignUp from "./signup";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const element = document.querySelector(".ct");
      if (element) {
        element.classList.add("show");
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  async function handleLogin() {
    setLoading(true);
    try {
      const response = await fetch("https://irctc-crtv.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Authentication successful:", data.message);

        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);

        navigate("/home");
      } else {
        console.error("Authentication failed:", data.message);
        alert("Check your password or username or signup");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleSignup() {
    setRedirectToSignUp(true);
  }

  if (redirectToSignUp) {
    return <SignUp />;
  }

  return (
    <div className="container">
      <div className="main">
        <form className="form">
          <h1>Login</h1>
          <br></br>
          <div className="input-group">
            {<label>Username:</label>}
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            {<label>Password:</label>}
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <br></br>
          </div>
          <button className="btn" type="button" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <div>
            Don't have an account?
            <button type="button" onClick={handleSignup} className="sign">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
