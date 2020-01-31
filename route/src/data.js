import React from 'react';
import Iterator from './Iterator.js'
import { useParams } from 'react-router-dom';

export const Data = (props) => {
  let {id}=useParams();
  let arr = Object.values(props.arr);
  let obj = arr.find((value) => value.id===Number(id))
 
  return (
    <ul>
      <Iterator obj={obj} id={id} />
    </ul>
  )
}



