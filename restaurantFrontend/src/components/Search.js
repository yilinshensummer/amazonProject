import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            <Form.Label>Search Restaurant Name</Form.Label>
            <Form.Group className="mb-3" controlId="searchName">
                <Form.Control type="name"
                placeholder="Enter Restaurant Name"
                onChange={e => {setSearchApplicant(e.target.value)} } 
                
                />
            
            </Form.Group>
            
            <Button variant="primary" onClick={() => handleSearch()}>
                Search
            </Button>
            
        </Form>
        

    </div>
  )
}

export default Search