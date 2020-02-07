import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text}) =>{
  return(
  <li onClick={onClick} className="list-group-item bg-info text-white" style={{textDecoration:completed?'line-through':'none',cursor:'pointer'}}>
    {text}
  </li>
  )
}
Todo.proTypes = {
  onClick:PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  text:PropTypes.string.is
}

export default Todo;