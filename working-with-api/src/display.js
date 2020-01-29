import React from 'react';
import {Data} from './data.js'

export function Display(props){
  let data = props.data;
  
  if(data.length > 0 ){
    let arr = data.map((value)=><Data of={value}/>)
    return <div className="container"><h1>Below is the Data:</h1><div className='row'>{arr}</div></div>
  }
  
  return <h1>No data</h1>
} 