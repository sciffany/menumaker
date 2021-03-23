import { Food } from "../food/Food";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../menu/menuSlice";
import { addFoodBackend } from "./categoryService";
import { message } from "antd";

export function Category({ category, categoryIndex }) {
  const [newFood, setNewFood] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      {category.foods.map((food, foodIndex) => (
        <Food key={foodIndex} food={food}></Food>
      ))}
      <div>
        <h4>Create new food</h4>
        Food name:
        <input
          type="text"
          placeholder="Fried chicken"
          onChange={(e) => setNewFood(e.target.value)}
        ></input>
        <br />
        Food url:
        <input
          type="text"
          placeholder="google.com/friedchicken"
          onChange={(e) => setNewUrl(e.target.value)}
        ></input>
        <br />
        Price:
        <input
          type="text"
          placeholder="1.20"
          onChange={(e) => setNewPrice(e.target.value)}
        ></input>
        <br />
        <button
          onClick={async () => {
            dispatch(addFood({ name: newFood, url: newUrl, categoryIndex }));
            const status = await addFoodBackend({
              name: newFood,
              url: newUrl,
              category: category.name,
              price: newPrice,
            });

            message.info(status);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
