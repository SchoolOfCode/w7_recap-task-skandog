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
import { v4 as uuidv4 } from "uuid";

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

  function onSubmit(name, comment) {
    let copy = [...commentList];
    copy = [...copy, { id: uuidv4(), author: name, content: comment }];
    setCommentList(copy);
  }

  // function onSubmmit(name, comment) {
  //   // addComment();
  // }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setTodoList(copy);
  };

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
                <CommentForm onSubmit={onSubmit}></CommentForm>
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
