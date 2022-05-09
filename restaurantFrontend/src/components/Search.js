import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search(props) {
    let listUpdated = props.listUpdated;
    let restaurants = props.restaurants;

    const [applicant,setSearchApplicant] = useState("");
    
    //let  applicant = ""

    // let state = {
    //     applicant:"Giant Burrito"
    // }
    

    function handleSearch(event){
        console.log(applicant);
        fetch(`demo?name=${applicant}`, {
            methon:'GET'
        
        })
        .then(response => response.json())
        .then(e => {listUpdated(e)});
        
    }


  return (
    <div className="rearchContainer">
        <Form>
            <Form.Label className="float-left">Search Restaurant Name</Form.Label>
            <InputGroup className="mb-3" controlId="searchName">
                <Form.Control type="name"
                placeholder="Enter Restaurant Name"
                onChange={e => {setSearchApplicant(e.target.value)} } 
                />
            <Button variant="outline-secondary"id="button-addon2" onClick={() => handleSearch()}>
                Search
            </Button>
            </InputGroup>
            
            
            
        </Form>
        

    </div>
  )
}

export default Search