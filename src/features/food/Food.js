import React from "react";

export function Food({ food }) {
  console.log(food);
  return (
    <div>
      <img src={food.url} alt={food.name} width="200px" />
      <br />
      {food.name}
    </div>
  );
}
