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
    <div className="comment-form">
      <div className="comment-input">
        <p>Author: </p>
        <input type="text" onChange={handleNameChange}></input>
        <p>Comment: </p>
        <textarea onChange={handleCommentChange}></textarea>
      </div>
      <div className="comment-button">
        <button onClick={comment !== "" ? onSubmit : console.log(`No Comment`)}>
          Click here to troll
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
