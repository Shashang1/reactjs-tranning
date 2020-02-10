import React from 'react';


const Button = (props)=>{
  return (
    <button onClick={props.handle} className="btn btn-success">Next</button>
  )
}

export default Button;