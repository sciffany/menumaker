import React from "react";

function OneRestaurant(p) {
  const { chain, branch, address, _id } = p.props;
  return (
    <div>
      <b>Chain</b>: {chain} <b>Branch</b>: {branch} <b>Address</b>: {address}{" "}
      <a href={`menu/${_id}`}>View</a>
    </div>
  );
}
export default OneRestaurant;
