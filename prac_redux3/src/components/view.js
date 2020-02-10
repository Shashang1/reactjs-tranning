import React from 'react';
import ChangeButton from '../container/ChangeButton';


const View = (props) =>{
  if(props.status==="waiting"){
    return(<div className="loading"><h3>Loading...</h3></div>)
  }
  else{
    return(
      <div className="card">
        <div className="card-header">
          <h4>Fetched Lines:</h4>
        </div>
        <div className="card-body">
          <h6>{props.data[0]}</h6>  
        </div>
        <div className="card-footer">
          <ChangeButton />
        </div>
      </div>
    )
  }
}

export default View;
