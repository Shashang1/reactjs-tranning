import React from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';


const AddNewPost = ({dispatch})=>{
  let input1, input2
  return (
    <form onSubmit={e=>{
      e.preventDefault()
      if(!input1.value.trim()){
        return
      }
      else if(!input2.value.trim())
      {
        return
      }
      dispatch(addPost(input1.value, input2.value))
      input1.value="";input2.value="";
    }}>
      Author:
      <input type="text" className="p-1 m-2" ref={node =>(input1 = node)}/>
      Post:
      <input type="text" className="p-1 m-2" ref={node =>(input2 = node)} placeholder="write something..."/>
      <button type="submit" className="btn btn-success m-2 p-2">
        Add Post
      </button>
    </form>)
}

export default connect()(AddNewPost);
