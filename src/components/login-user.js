import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom"; // If using React Router
import { useNavigate } from "react-router-dom";

export default function Loginuser(props) {
  console.log("props", props);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onChangeUserName = (e) => {
    setName(e.target.value);
  };

  const onChangeUserPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      name: name,
      password: password,
    };
    axios
      .post("http://localhost:4000/user/login-user", userObject)
      .then((res) => {
        if (res.error) {
          alert("Error");
          return;
        }
        const { _id, name } = res.data.user;
        localStorage.setItem("user", JSON.stringify({ _id, name }));
        navigate("/admin-page");
      })
      .catch((e) => {
        console.log(">>>", e);
        alert("Неправильний логін або пароль");
      });

    setName("");
    setPassword("");
  };
  return (
    <div className="App-login">
      <div className="App-form">
        <div className="form-wrapper">
          <form className="login-container" onSubmit={onSubmit}>
            <div className="form-row">
              <label className="login-label">Name</label>
              <input type="text" value={name} onChange={onChangeUserName} />
            </div>

            <div className="form-row">
              <label className="login-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={onChangeUserPassword}
              />
            </div>

            <button
              className="form-button-login"
              // variant="primary"
              // size="lg"
              // block="block"
              // type="submit"
              // className="mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
