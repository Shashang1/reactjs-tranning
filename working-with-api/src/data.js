import React from 'react';

export function Data(props){
  const obj = props.of;

  return (
  <div className='col'>
  <ul className='obj list-group list-group-flush bg-secondary'>
    <li className="id list-group-item bg-success text-white">Id: {obj.id}</li>
    <li className="name list-group-item bg-secondary text-white">Name: {obj.name}</li>
    <li className="username list-group-item bg-secondary text-white">Username: {obj.username}</li>
    <li className="email list-group-item bg-secondary text-white">E-mail: {obj.email}</li>
    <li className="address list-group-item bg-secondary text-white">Address: {obj.address.street}<br/>{obj.address.suite}<br/>{obj.address.city}</li>
  </ul>
  </div>
)
}