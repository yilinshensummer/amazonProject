import React, { useState } from "react";
import Table from 'react-bootstrap/Table';


function RestaurantList() {
    //modle
    const [restaurants, updateList] = useState([
        {
            id: 1,
            name: "Yilin's Goodies",
            address: 'San Francisco',
            typesOfFood: 'chinese, coffe'
        },
        {
            id: 2,
            name: "Sam's Goodies",
            address: 'Los Angeles',
            typesOfFood: 'noodle, coffe'
        }
    ]);

    //control
    function handleSeclect(i) {
        //console.log(i);
        // call rest api restaurants/{id}
        //display resturant details
    }

    function handleDelete(restaurant){
        console.log(restaurant);
        updateList(restaurants.filter((item) => item !== restaurant));
    }

    //view
    return (
        <div className="container">
            <h3 className="p-3 text-center">Restaurant</h3>
            <Table striped border hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Types Of Food</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(
                        (restaurant, idx) =>
                        <tr key={idx} >
                            <td>{restaurant.id}</td>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.address}</td>
                            <td>{restaurant.typesOfFood}</td>
                            <td><button onClick={
                                () => handleDelete(restaurant)
                            }>Delete</button>
                            <button onClick={
                                () => handleSeclect(restaurant)
                            }>Select</button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </Table>


        </div>
    )
}

export default RestaurantList