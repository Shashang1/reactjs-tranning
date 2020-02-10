import React from 'react';


const View = (props) =>{
  if(props.status==="waiting"){
    return(<h3>Loading...</h3>)
  }
  else{
    return(
      <div>
        <h2>Fetched Lines:</h2>
        <h3>{props.data[0]}</h3>
        <h5>Refersh Page for new Line</h5>
      </div>
    )
  }
}

export default View;
