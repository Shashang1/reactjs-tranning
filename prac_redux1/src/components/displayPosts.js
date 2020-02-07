import React from 'react';
import Post from './post';
import PropTypes from 'prop-types'

const DisplayPosts = ({posts, like}) =>(
  <ul className="list-group">
    {posts.map((post)=>(
      <Post key={post.id} {...post} like={()=>like(post.id)}></Post>
    ))}
  </ul>
)

DisplayPosts.propTypes = {
  posts:PropTypes.arrayOf(
    PropTypes.shape({
      author:PropTypes.string.isRequired,
      text:PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  like:PropTypes.func.isRequired
}

export default DisplayPosts;