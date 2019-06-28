import React from 'react'

   const Travel = ({destination, country, photo, distance}) => (
       <div>
           <h1>{destination}</h1>

           <h2>{country}</h2>

            <img src={photo} alt="pays en question"/>

            <p>{distance}</p>
       </div>
    );

export default Travel
