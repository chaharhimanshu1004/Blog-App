import React from 'react'
import '../styles/Post.css'

const Post = ({content,summary,image}) => {
  console.log(image)
  return (
    <div>
      {content}
      {summary}
      
      <div className="image">
        <img src={"http://localhost:6004/"+image} />
      </div>
    </div>
  )
}

export default Post
