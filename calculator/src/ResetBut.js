import React from 'react';

export const ResetBut=(props)=>{
  return <input type ='button' className='but-1' value="reset" onClick={()=>props.reset()}/>
  
}