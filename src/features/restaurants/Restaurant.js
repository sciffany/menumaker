import React from "react";
import { useDispatch } from "react-redux";
import { changeActiveRestaurant } from "../menu/menuSlice";

function Restaurant(p) {
  const dispatch = useDispatch();

  const { chain, branch, address, _id } = p.props;
  return (
    <div>
      <b>Chain</b>: {chain} <b>Branch</b>: {branch} <b>Address</b>: {address}{" "}
      <a
        onClick={() => dispatch(changeActiveRestaurant(_id))}
        href={`menu/${_id}`}
      >
        View
      </a>
    </div>
  );
}
export default Restaurant;
