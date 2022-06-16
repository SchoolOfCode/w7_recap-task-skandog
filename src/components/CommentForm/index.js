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

  const handleClick = function () {
    onSubmit(name, comment);
  };

  return (
    <div className="comment-form">
      <div className="comment-input">
        <p>Author: </p>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder={name}
        ></input>
        <p>Comment: </p>
        <textarea onChange={handleCommentChange}></textarea>
      </div>
      <div className="comment-button">
        <button
          onClick={comment !== "" ? handleClick : console.log(`No Comment`)}
        >
          Click here to troll
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
