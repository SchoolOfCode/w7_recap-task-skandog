import React from "react";

function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments
        ? comments.map((comm) => {
            <li key={comm.id}>
              <Comment author={comm.author} content={comm.content}></Comment>;
            </li>;
          })
        : ""}
    </ul>
  );
}

export default CommentList;
