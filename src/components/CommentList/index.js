import React from "react";
import Comment from "../Comment";

function CommentList({ comments }) {
  console.log(comments);
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
      <Comment value={"1"} author={"hello"} content={"from me"}></Comment>
    </ul>
  );
}

export default CommentList;
