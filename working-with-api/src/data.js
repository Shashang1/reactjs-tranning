import React from 'react';
import Iterator from './Iterator.js'

export function Data(props){

  
  return (
  <div className='col'>
  <ul className='obj list-group list-group-flush bg-dark'>
      <Iterator obj = {props.of}/>
  </ul>
  </div>
  )
}
