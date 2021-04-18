import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, message } from "antd";
import styled from "styled-components";

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

  const [signupName, setSignupName] = React.useState("");
  const [signupPassword, setSignupPassword] = React.useState("");
  const [confirmPassword, setConfrimPassword] = React.useState("");

  return (
    <SignupWrapper>
      <h1>Welcome to Kwikorder</h1>
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
      <Button type="primary">Sign up</Button>
      <br />
      <span>
        Existing user? <a href="/">Login</a>
      </span>
    </SignupWrapper>
  );
}
