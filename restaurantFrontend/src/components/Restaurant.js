import React from "react";
import RestaurantList from "./RestaurantList";


function Restaurant(props) {
    let details = props.restaurant;
  return (
    
    <div className="restaurant-info">
      
       <h2 >Restaurant Details</h2>
            <ul >
              
                <li><strong>Restaurant Name: </strong>{details.applicant}</li>
                <li><strong>Restaurant Address: </strong>{details.address}</li>
                <li><strong>Food Types:</strong>{details.foodItems}</li>
                <li><strong>Schedule: </strong>{details.schedule}</li>
            </ul>
        {/* <h3>{details.name}</h3>
        <div>
            <div>{details.id}</div>
            <div>{details.address}</div>
            <div>{details.foodItems}</div>

        </div> */}
        
      
    </div>
  )
}

export default Restaurant