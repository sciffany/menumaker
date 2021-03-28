import React from "react";
import { withRouter } from "react-router";
import { useInput } from "../../hooks/useInput";
import { Input, Button } from "antd";
import { useSelector } from "react-redux";
import {
  addRestaurantBackend,
  getRestaurantsBackend,
} from "./restaurantService";
import { selectToken } from "../login/loginSLice";
import OneRestaurant from "./OneRestaurant";
import Spin from "antd/es/spin";
import "antd/es/spin/style/css";

function Restaurant() {
  const token = useSelector(selectToken);

  const { value: chain, bind: chainProps } = useInput("");
  const { value: branch, bind: branchProps } = useInput("");
  const { value: address, bind: addressProps } = useInput("");

  const [wasNewRestaurantCreated, setWasNewRestaurantCreated] = React.useState(
    false
  );
  const [myRestaurants, setRestaurants] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const myRestaurants = await getRestaurantsBackend(token);
      setRestaurants(myRestaurants);
    })();
  }, [token, wasNewRestaurantCreated]);

  return (
    <div>
      <h1>Restaurants Owned</h1>
      {myRestaurants.length ? (
        myRestaurants.map((restaurant, restaurantIndex) => {
          return <OneRestaurant key={restaurantIndex} props={restaurant} />;
        })
      ) : (
        <>
          <Spin />
        </>
      )}
      <br />
      <h1>Create new restaurant</h1>
      Chain
      <Input type="text" {...chainProps}></Input>
      <br />
      Branch
      <Input type="text" {...branchProps}></Input>
      <br />
      Address
      <Input type="text" {...addressProps}></Input>
      <br />
      <Button
        onClick={async () => {
          await addRestaurantBackend({ chain, branch, address, token });
          setWasNewRestaurantCreated(true);
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default withRouter(Restaurant);
