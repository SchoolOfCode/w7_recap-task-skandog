/*
- import react and useState, components
- define usestate as array of objects
- return a mapping over array


*/
import React, { useState } from "react";
import blog from "../../data/blogs";
import BlogPost from "../BlogPost";

function App() {
  const [blogList, setBlogList] = useState([blog]);

  console.log(blogList);
  return (
    <div className="flex-container">
      <header>
        <h1>Skandys blog</h1>
      </header>
      <div className="content-container">
        {blogList.map((post) => {
          return (
            <BlogPost
              title={post.title}
              author={post.author}
              datePosted={post.datePosted}
              content={post.content}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
            ></BlogPost>
          );
        })}
      </div>
    </div>
  );
}

export default App;
