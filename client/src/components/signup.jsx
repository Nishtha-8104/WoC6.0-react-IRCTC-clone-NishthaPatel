import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function SignUp() {
  const [isRegistered, setRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handlechange() {
    if (username && password && email) {
      try {
        const statusOfSignUp = await fetch("https://irctc-crtv.onrender.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ username, email, password }),
        });

        if (statusOfSignUp.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");

          const response = await statusOfSignUp.json();
          localStorage.setItem("token", response.token);
          localStorage.setItem("username", response.username);

          setRegistered(true);
        } 
      } catch (error) {
        console.log("Error posting data", error);
        alert("Please these username or password is taken, add other username or password");
      }
    } else {
      alert("Please enter all required information");
    }
  }

  try {
    if (isRegistered) {
      navigate("/home");
    }
  } catch (error) {
    console.error("Error navigating", error);
  }

  return (
      <Card className="container signup">
      <div className="main">
      <form className="form">
        <h1>SignUp</h1>
        <br></br>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Username: </label>
        <input
        className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button onClick={handlechange}>Sign up</Button>

        <br />
        <br />
        </form>
        </div>
      </Card>
    
  );
}

export default SignUp;
