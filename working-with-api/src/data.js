import React from 'react';


export function Data(props){
  let arr =[];
  let i = 0;
  let obj = props.of;
  function iterateObj(obj){
    for(let key in obj){
        if(typeof(obj[key])==="object"){
            iterateObj(obj[key]);
        }
        else{
            arr.push(<li key={i++} className="list-group-item bg-secondary text-white data"> {key+": "+obj[key]}</li>)
        }
     }
  }
  iterateObj(obj);
  
  return (
  <div className='col'>
  <ul className='obj list-group list-group-flush bg-secondary'>
      {arr}
  </ul>
  </div>
  )
}
