import React from 'react'
import '../styles/Post.css'

const Post = ({title,summary,image,id,author,content}) => {

  return (
    <div className='post'>
      <div className="image">
        <img src={"http://localhost:6004/"+image} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{summary}</p>
        <strong>{author.username}</strong>
      </div>
    
      
    </div>
  )
}

export default Post
