import React from 'react'
import PropTypes from 'prop-types';

const Post = ({author, text, id, likes, like}) =>(
  <li key={id} className="list-group-item bg-dark text-white">
    <h3>{author}</h3>
    <p>
      {text}
    </p>
    {likes===1 && likes+"Like"}
    {likes>1 && likes+"Likes"} 
    <button className="btn btn-primary" onClick={like}>Like</button>
  </li>
)

Post.propTypes={
  author:PropTypes.string.isRequired,
  text:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
  likes:PropTypes.number.isRequired,
  like:PropTypes.func.isRequired
}

export default Post;
