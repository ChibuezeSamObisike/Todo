import React, { Component } from "react";
const Done = (props) => {
  const { val, onDelete, id } = props;
  return (
    <h1>
      {val}
      <span
        style={{ onMouseHover: "Click" }}
        onClick={() => onDelete(id)}
        className="badge bg-danger ms-2"
      >
        Delete
      </span>
    </h1>
  );
};

export default Done;
