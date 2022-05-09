import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function AddRestaurant(props) {
    let listUpdated = props.listUpdated;
    let restaurants = props.restaurants;

    let state = {
        applicant: "test",
        address: "tuiwh",
        foodItems: "noodle"
    }

    function handleSumbit(){
        //console.log(state);
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
            <Form.Label >Add Restaurant</Form.Label>
            <Row className="mb-3">
            <Form.Group as={Col} controId="formName">
                
                <Form.Control type="name" 
                //value={state.applicant}
                onChange={e => state.applicant = e.target.value}
                placeholder="EnterName"/>
            </Form.Group>

            <Form.Group as={Col} controId="formBasicPassword">
                
                <Form.Control type="name"
                
                onChange={e => state.address = e.target.value}
                placeholder="Address"/>
            </Form.Group>

            <Form.Group as={Col} controId="formFoodTypes">
               
                <Form.Control type="name"
                //value={state.foodItems}
                onChange={e => state.foodItems = e.target.value}
                placeholder="Food Type, e.g.chinese"/>

            </Form.Group>

            <Col xs="auto">
            <Button variant ="primary" type="submit" onClick={() => handleSumbit()}>
                Add Restaurant
            </Button>
            </Col>

            </Row>
        
        </Form>
    </div>
  )
}


export default AddRestaurant