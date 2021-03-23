import React from "react";
import { withRouter } from "react-router";
import { useInput } from "../../hooks/useInput";
import { Input, Button } from "antd";

function Restaurant() {
  const { value: newChain, bind: chainProps } = useInput("");
  const { value: newBranch, bind: branchProps } = useInput("");
  const { value: address, bind: addressProps } = useInput("");

  return (
    <div>
      <h1>Restaurants</h1>
      <br />
      Chain
      <Input type="text" {...chainProps}></Input>
      <br />
      Branch
      <Input type="text" {...branchProps}></Input>
      <br />
      Address
      <Input type="text" {...addressProps}></Input>
      <br />
      <Button onClick={() => {}}>Submit</Button>
    </div>
  );
}

export default withRouter(Restaurant);
