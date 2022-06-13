import React, { useState } from "react";

function CommentForm({ onSubmit }) {
  const [name, setName] = useState("Anon Author");
  const [comment, setComment] = useState("");

  const handleNameChange = function (event) {
    setName(event.currentTarget.value);
  };

  const handleCommentChange = function (event) {
    setComment(event.currentTarget.value);
  };

  return (
    <>
      <p>Author: </p>
      <input type="text" onChange={handleNameChange}></input>
      <p>Comment: </p>
      <textarea onChange={handleCommentChange}></textarea>
      <button
        onClick={comment !== "" ? onSubmit : console.log(`No Comment`)}
      ></button>
    </>
  );
}

export default CommentForm;
