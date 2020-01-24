import React from 'react';
import Result from './index.js';

class Add extends React.Component{
  constructor(props){
    super(props); 
  }
  

  render(){
    return(
      <input type="button" value={this.props.val} onClick={() => this.add(this.props.val)} className="but"/>
    )
  }

}
export default Add;
