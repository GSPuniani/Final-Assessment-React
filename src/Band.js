import React from 'react';
import Like from './Like'


function Band(props) {
  const { name, formed, origin, fans } = props

  return (
    <div className="Band">
        <h1 className="Band-name">{ name }</h1>
        <p className="Band-formed">Formed: { formed }</p>
        <p className="Band-origin">{ origin }</p>
        <p className="Band-fans">Fans: { (fans * 1000).toLocaleString('en') }</p>

        <Like />
    </div>
  )
}

export default Band