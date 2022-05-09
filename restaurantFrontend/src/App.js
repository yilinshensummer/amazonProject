
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

import AddRestaurant from './components/AddRestaurant';
import Restaurant from './components/Restaurant';
import RestaurantList from './components/RestaurantList';
import Map from './components/Map';
import GoogleMap from './components/GoogleMap';


function App() {
  // const [selectedRestaurant] = useState(
  //   {
  //       id: 1,
  //       name: "Yilin's Goodies",
  //       address: 'San Francisco',
  //       typesOfFood: 'chinese, coffe'
  //   }
    
//);
  return (
    <div>
      <div className="App">
        <h1 className="App-title"> Welcome to Restaurant App</h1>
      
      <RestaurantList/>
      <GoogleMap/>
      
      
      </div>
      

      

      
    </div>
  );
}

export default App;
