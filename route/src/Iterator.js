import React from 'react';

class Iterator extends React.Component{
  constructor(props){
    super(props);
    this.i = 1;
  }
  
  iterateObj=(obj)=>{
    for(let key in obj){
      if(typeof(obj[key])==="object"){
          this.iterateObj(obj[key]);
      }
      else{
          this.arr.push(<li key={this.i++} className="list-group-item bg-dark text-white data"> {key+": "+obj[key]}</li>)
      }
    }
  }

  render()
  {
    this.arr = [];  
    this.iterateObj(this.props.obj);
    if(this.props.obj.id === Number(this.props.id))
    {
      return (this.arr)  
    }
    else{
      return <h1>Loading</h1>
    }
    
  }
}

export default Iterator;