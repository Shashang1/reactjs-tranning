import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../action/actions'


let AddTodo = ({dispatch})=>{
  let input

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        if(!input.value.trim()){
          return
        }
        dispatch(addTodo(input.value))
        input.value=""
      }}>
        <input type="text" ref={node=>{input=node}}className="bg-info text-white p-1" style={{border:"none"}}/>
        <button type="submit" className="btn btn-success">Add Todo</button>

      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)
export default AddTodo;