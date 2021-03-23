import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../category/Category";
import { addCategory, selectCategories } from "../menu/menuSlice";

export function Menu() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [newCategory, setNewCategory] = useState("");

  const listOfCategories = categories.map((category, categoryIndex) => {
    return (
      <li key={category.name}>
        {" "}
        <h2>{category.name}</h2>
        <Category
          key={categoryIndex}
          category={category}
          categoryIndex={categoryIndex}
        />
      </li>
    );
  });

  return (
    <>
      Input food category
      <div>
        <input
          type="text"
          onChange={(e) => setNewCategory(e.target.value)}
        ></input>
        <button onClick={() => dispatch(addCategory(newCategory))}>
          Submit
        </button>
      </div>
      <ol>{listOfCategories}</ol>
    </>
  );
}
