import React from 'react';
import Like from './Like'
import './Band.css'


function Band(props) {
  const { name, formed, origin, fans } = props

  return (
    <div className="Band">
        <h1 className="Band-name">{ name }</h1>
        <p className="Band-formed"><b>Formed:</b> { formed }</p>
        <p className="Band-origin"><b>Origin:</b> { origin }</p>
        <p className="Band-fans"><b>Fans:</b> { (fans * 1000).toLocaleString('en') }</p>

        <Like />
    </div>
  )
}

export default Band