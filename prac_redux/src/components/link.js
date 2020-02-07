import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick})=>{
  if (active){
    return <button className="btn btn-primary active">{children}</button>
  }
  return (
    <button onClick={e=>{ e.preventDefault(); onClick()}} className="btn btn-primary">
      {children}
    </button>
  )
}

Link.propTypes = {
  active:PropTypes.bool.isRequired,
  children:PropTypes.node.isRequired,
  onClick:PropTypes.func.isRequired
}

export default Link;