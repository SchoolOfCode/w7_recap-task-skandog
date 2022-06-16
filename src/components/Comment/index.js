/*
- Need to return jsx for h3 and p tag, with css element next to it
- need a function to split the name, id first letter of each elt, 
then feed back into circle
-need Component to take props of author and content


*/

import React from "react";

function Comment({ value, author, content }) {
  return (
    <li className="comment" key={value}>
      <div className="comment-container">
        <div className="author-row">
          <div className="circle">
            <p className="circle-text">
              {author.split(" ").map((nom) => {
                return nom.charAt(0);
              })}
            </p>
          </div>
          <div className="author-name">{author}</div>
        </div>
        <p className="content">{content}</p>
      </div>
    </li>
  );
}

export default Comment;
