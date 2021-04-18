import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./loginSlice";
import { loginBackend } from "../login/loginService";
import { useHistory } from "react-router-dom";
import { Button, message } from "antd";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;

export function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginName, setLoginName] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  return (
    <LoginWrapper>
      <h1>Login</h1>
      Email address
      <br />
      <input type="text" onChange={(e) => setLoginName(e.target.value)}></input>
      <br />
      Password
      <br />
      <input type="text" onChange={(e) => setLoginPassword(e.target.value)}></input>
      <br />
      <Button
        type="primary"
        onClick={async () => {
          try {
            const token = await loginBackend({
              email: loginName,
              password: loginPassword,
            });

            dispatch(login(token));
            if (token) {
              history.push("/restaurants");
            }
          } catch (error) {
            message.info("error");
          }
        }}
      >
        Login
      </Button>
      <br />
      <span>
        New user? <a href="/signup"> Sign up</a>
      </span>
    </LoginWrapper>
  );
}
