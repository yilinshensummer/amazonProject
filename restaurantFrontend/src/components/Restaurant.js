import React from "react";


function Restaurant(props) {
    let details = props.restaurant;
  return (
    
    <div className="container">
        <h3 className="p-3 text-center">{details.name}</h3>
        <div>
            <div>{details.id}</div>
            <div>{details.address}</div>
            <div>{details.typesOfFood}</div>

        </div>
        <div>
            Call google API to show the map
        </div>
      
    </div>
  )
}

export default Restaurant