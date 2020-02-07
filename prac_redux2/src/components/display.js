import React from 'react'

const Display = ({state, increment, decrement}) =>{
  return (
    <div>
      <button type="button" onClick={()=>decrement()}>Decrement --</button>
      <span style={{margin:"10px"}}>{state} x 300</span> 
      <button type="button" onClick={()=>increment()}>Increment ++</button>
    <p>Total value: {state*300}</p>  
    </div>
  )
}

export default Display;