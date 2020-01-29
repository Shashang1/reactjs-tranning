import React from 'react';

class Iterator extends React.Component{
  constructor(props){
    super(props);
    this.obj = this.props.obj;
    this.arr = [];
    this.iterateObj(this.obj);
  }
  
  iterateObj=(obj)=>{
    let i =0;
    for(let key in obj){
        if(typeof(obj[key])==="object"){
            this.iterateObj(obj[key]);
        }
        else{
            this.arr.push(<li key={i++} className="list-group-item bg-secondary text-white data"> {key+": "+obj[key]}</li>)
        }
     }
  }

  render(){
    return (this.arr)
  }
}

export default Iterator;