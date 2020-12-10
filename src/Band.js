import React from 'react';
import Like from './Like'
import './Band.css'


function Band(props) {
  const { name, formed, origin, fans, style } = props

  return (
    <div className="Band">
        <h1>{ name }</h1>
        <p><b>Formed:</b> { formed }</p>
        <p><b>Origin:</b> { origin }</p>
        <p><b>Fans:</b> { (fans * 1000).toLocaleString('en') }</p>
        <p><b>Styles:</b> { style }</p>

        <Like />
    </div>
  )
}

export default Band