/*
- Need to return jsx for h3 and p tag, with css element next to it
- need a function to split the name, id first letter of each elt, 
then feed back into circle
-need Component to take props of author and content


*/

import React from "react";

function Comment({ value, author, content }) {
  console.log(`key = to ` + value);
  return (
    <li className="comment" key={value}>
      <span className="author-row">
        <div className="circle">
          {author.split("").map((nom) => {
            return nom.charAt(0);
          })}
        </div>
        <div className="author-name">{author}</div>
      </span>
      <p className="content">{content}</p>
    </li>
  );
}

export default Comment;
