import React from 'react';


  export const Button=(props)=> {
    return <input type ='button' className='but' value={props.val} onClick={()=>props.addFunc(props.val)}/>
  }
