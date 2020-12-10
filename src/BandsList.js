import React from 'react';
import data from './metal.json';
import Band from './Band';
import './BandsList.css'


function BandsList() {
    const bands = data.map(({ band_name, formed, origin, fans }, i) => {
        return (
            <Band
            id={i}
            key={band_name}
            name={band_name}
            formed={formed}
            origin={origin}
            fans={fans}
          />
        )
    })

    return (
        <div className="BandsList">
        { bands }
        </div>
    )
}

export default BandsList
