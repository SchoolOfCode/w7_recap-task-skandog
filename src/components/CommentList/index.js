import React from "react";
import Comment from "../Comment";

function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map((comm) => {
        return (
          <Comment
            value={comm.id}
            author={comm.author}
            content={comm.content}
          ></Comment>
        );
      })}
    </ul>
  );
}

export default CommentList;
