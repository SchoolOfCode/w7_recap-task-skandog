function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map((comm) => {
        <Comment
          key={comm.id}
          author={comm.author}
          content={comm.content}
        ></Comment>;
      })}
    </ul>
  );
}

export default CommentList;
