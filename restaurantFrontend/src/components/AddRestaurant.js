import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function AddRestaurant(props) {
    let listUpdated = props.listUpdated;
    let restaurants = props.restaurants;

    let state = {
        applicant: "test",
        address: "tuiwh",
        foodItems: "noodle"
    }

    function handleSumbit(event){
        console.log(event);
        fetch('demo/add', {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
         }).then(e => {listUpdated([state,...restaurants])});
        

    }

  return (
    <div className="container">
        <Form>
            <Form.Group className="mb-3" controId="formName">
                <Form.Label>Applicant</Form.Label>
                <Form.Control type="name" 
                //value={state.applicant}
                onChange={e => state.applicant = e.target.value}
                placeholder="EnterName"/>
            </Form.Group>
            <Form.Group className="mb-3" controId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="name"
                
                onChange={e => state.address = e.target.value}
                placeholder="Address"/>
            </Form.Group>
            <Form.Group className="mb-3" controId="formFoodTypes">
                <Form.Label>Food Items</Form.Label>
                <Form.Control type="name"
                //value={state.foodItems}
                onChange={e => state.foodItems = e.target.value}
                placeholder="Food Type, e.g.chinese"/>

            </Form.Group>

            <Button variant ="primary" onClick={() => handleSumbit()}>
                Add
            </Button>
        
        </Form>
    </div>
  )
}


export default AddRestaurant