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
        <p className='contentAuthor'><strong>Created by - {author.username}</strong></p>
      </div>
    
      
    </div>
  )
}

export default Post
