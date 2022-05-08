import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddRestaurant() {
  return (
    <div className="container">
        <Form>
            <Form.Group className="mb-3" controId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="EnterName"/>
            </Form.Group>
            <Form.Group className="mb-3" controId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="name" placeholder="Address"/>
            </Form.Group>
            <Form.Group className="mb-3" controId="formFoodTypes">
                <Form.Label>Food Type</Form.Label>
                <Form.Control type="name" placeholder="Food Type, e.g.chinese"/>
            </Form.Group>
            <Button variant ="primary" type="submit">
                Add
            </Button>
        
        </Form>
    </div>
  )
}

export default AddRestaurant