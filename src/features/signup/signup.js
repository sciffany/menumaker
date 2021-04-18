import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, message } from "antd";
import styled from "styled-components";
import { signupBackend } from "./signupService.ts";

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;

export function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [signupEmail, setSignupName] = React.useState("");
  const [signupPassword, setSignupPassword] = React.useState("");
  const [confirmPassword, setConfrimPassword] = React.useState("");

  return (
    <SignupWrapper>
      <h1>Welcome to Menu Maker</h1>
      Email address
      <br />
      <input type="text" onChange={(e) => setSignupName(e.target.value)}></input>
      <br />
      Password
      <br />
      <input type="text" onChange={(e) => setSignupPassword(e.target.value)}></input>
      <br />
      Confirm Password
      <input type="text" onChange={(e) => setConfrimPassword(e.target.value)}></input>
      <br />
      <Button
        type="primary"
        onClick={async () => {
          try {
            const token = await signupBackend({
              email: signupEmail,
              password: signupPassword,
              confirmPassword: confirmPassword,
            });

            // dispatch(signup(token));
            // if (token) {
            //   history.push("/restaurants");
            // }
          } catch (error) {
            message.info("error");
          }
        }}
      >
        Sign up
      </Button>
      <span>
        Existing user? <a href="/">Login</a>
      </span>
    </SignupWrapper>
  );
}
