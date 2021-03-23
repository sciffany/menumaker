import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./loginSlice";
import { loginBackend } from "../login/loginService";
import { useHistory } from "react-router-dom";

export function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginName, setLoginName] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  return (
    <>
      <h1>Landing page</h1>
      Login name
      <input type="text" onChange={(e) => setLoginName(e.target.value)}></input>
      <br />
      Login password
      <input
        type="text"
        onChange={(e) => setLoginPassword(e.target.value)}
      ></input>
      <br />
      <button
        onClick={async () => {
          const token = await loginBackend({
            email: loginName,
            password: loginPassword,
          });
          dispatch(login(token));
          if (token) {
            history.push("/restaurants");
          }
        }}
      >
        Login
      </button>
      <button onClick={async () => await dispatch(logout({}))}>Logout</button>
    </>
  );
}
