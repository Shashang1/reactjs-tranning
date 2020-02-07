import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({todos, onTodoClick}) =>(
  <ul className='list-group'>
    {todos.map((todo,index)=>{
      return (<Todo key={index} {...todo} onClick={() => onTodoClick(index)} />)
    }        
    )}
  </ul>
)

TodoList.propTypes={
  todos:PropTypes.arrayOf(
    PropTypes.shape({
      completed:PropTypes.bool.isRequired,
      text:PropTypes.string.isRequired
    }).isRequired
  )
}

export default TodoList