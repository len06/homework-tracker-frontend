import React, { useRef, useState } from "react";
import "./Authentification.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();

  function submitForm() {
    axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then(() => {
        navigate("/");
        localStorage.setItem("username", username);
      })
      .catch((err) => {
        setWarning("Wrong username/password!");
        setPassword("");
      });
  }

  return (
    <>
      <article>
        <h1>Welcome</h1>

        <input
          type="text"
          placeholder="Username/Email"
          value={username}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (passwordRef.current === undefined) {
                console.error("passwordRef cannot be found!");
                return;
              }
              passwordRef.current?.focus();
            }
          }}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitForm();
            }
          }}
        />
        <button onClick={submitForm}>Login</button>

        <label className="warning">{warning}</label>

        <br />
        <footer>
          <label>Don't have an account?</label>
          <Link to="/register">Sign Up</Link>
        </footer>
      </article>
    </>
  );
}

export default Login;
