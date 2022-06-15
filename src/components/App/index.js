/*
- import react and useState, components
- define usestate as array of objects
- return a mapping over array


*/
import React, { useState } from "react";
import blog from "../../data/blogs";
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import Comment from "../Comment";

function App() {
  const [blogList, setBlogList] = useState(blog);
  const [commentList, setCommentList] = useState([
    {
      id: "kskBC5HZ8qgNQUiW6If6q",
      author: "Billy Bootcamper",
      content: "Hello, great post",
    },
    {
      id: "jFyGAKz1VsGputO1gV8xa",
      author: "Chris Meah",
      content: "Many thank yous",
    },
  ]);

  function addComment(newComment) {
    setCommentList([...commentList, newComment]);
  }

  function onSubmmit(event) {
    event.preventDefault();
  }

  console.log(blogList);

  return (
    <div className="flex-container">
      <header className="header">
        <h1>Skandys blog</h1>
      </header>
      <div className="row">
        <div className="leftCol">
          {blogList.map((post) => {
            return (
              <>
                <BlogPost
                  title={post.title}
                  author={post.author}
                  datePosted={post.datePosted}
                  content={post.content}
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                ></BlogPost>
                <CommentList comments={commentList}></CommentList>
                <CommentForm></CommentForm>
              </>
            );
          })}
        </div>
        <div className="rightCol"></div>
      </div>
    </div>
  );
}

export default App;
