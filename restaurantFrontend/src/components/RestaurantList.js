import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Restaurant from "./Restaurant";
import AddRestaurant from "./AddRestaurant";
import Search from "./Search";




function RestaurantList() {
    //modle
    const [restaurants, updateList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedRestaurant,setSelected] = useState({});

    //const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("demo")
      .then(res => {
          //console.log(res);
          return res.json();
      })
      .then(
        (result) => {
          result.sort((a, b) => b.id - a.id);
          
          let result1 = result.slice(0,10);
          updateList(result1);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

    //control
    function listUpdated(newList) {
        updateList(newList);
    }

    function handleSeclect(restaurant) {

        setSelected(restaurant);
        //console.log(i);
        // call rest api restaurants/{id}
        //display resturant details
    }

    function handleDelete(restaurant){
        console.log(restaurant);

         fetch(`demo/${restaurant.id}`, {
            method:"DELETE",
        }).then(e => {
            updateList(restaurants.filter((item) => item !== restaurant));
        });
    }
    // useEffect((restaurant) => {
    //     // DELETE request using fetch inside useEffect React hook
    //     fetch('demo'+restaurant.id, { method: 'DELETE' })
    //         .then(() => setStatus('Delete successful'));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, [restaurants]);

    //view
    return (
        <div className="container">
            <div>
            
            <Restaurant restaurant = {selectedRestaurant}/> 
            {/* <Map restaurant = {selectedRestaurant}/> */}
            
            
            </div>
            <p></p>
            
             <AddRestaurant
                restaurants = {restaurants}
                listUpdated = {listUpdated}
             />
            <Search
             restaurants = {restaurants}
             listUpdated = {listUpdated}
             />
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
                            <td>{restaurant.applicant}</td>
                            <td>{restaurant.address}</td>
                            <td>{restaurant.foodItems}</td>
                            <td><button onClick={
                                () => handleDelete(restaurant)
                            }>Delete</button>
                            </td>
                            <td>
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