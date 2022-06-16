/* 
- Return each line of jsx to render blog component
- need to hand props for each one corresponding to the fields provided
- no need for state management? Maybe

*/

import React from "react";
import blog from "../../data/blogs.js";

function BlogPost({ title, author, datePosted, content, imageSrc, imageAlt }) {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <h3 className="blog-post-author">{author}</h3>
      <h4 className="blog-post-date">{datePosted}</h4>
      <p className="blog-copy">{content}</p>
      <img className="blog-img" src={imageSrc} alt={imageAlt} />
    </div>
  );
}

export default BlogPost;
