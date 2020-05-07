import React, { Component } from "react";

const Comment = ({ onClick, value, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="Comment"
        type="text"
        placeholder="Comment"
        className="m-1 form-control"
        value={value}
        onChange={handleChange}
      ></input>
      <button className="btn btn-primary" type="submit">
        Save
      </button>
    </form>
  );
};

export default Comment;
