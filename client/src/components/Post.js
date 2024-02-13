import React from "react";
import "../styles/Post.css";
import { Link } from "react-router-dom";

const Post = ({ title, summary, image, id, author, content }) => {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${id}`}>
          <img src={"http://localhost:6004/" + image} alt="Image" />
        </Link>
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{summary}</p>
        <p className="contentAuthor">
          <strong>Created by - {author.username}</strong>
        </p>
      </div>
    </div>
  );
};

export default Post;
