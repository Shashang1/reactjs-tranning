import React from 'react';

export function Data(props){
  const obj = props.of;
  let array =["Name: "+obj.name,"Username: "+obj.username,"E-mail: "+obj.email,
    "Address: "+obj.address.street+" "+obj.address.suite+" "+obj.address.city,
    "Phone: "+obj.phone,"Zip :"+obj.address.zipcode];
  array = array.map((value,index)=><li key= {index+1} className="name list-group-item bg-secondary text-white">{value}</li> )
  
  return (
  <div className='col'>
  <ul className='obj list-group list-group-flush bg-secondary'>
    <li key={0} className="id list-group-item bg-success text-white">Id: {obj.id}</li>
    {array}
  </ul>
  </div>
)
}