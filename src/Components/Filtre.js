import React from "react";
import { Form } from "react-bootstrap";


export const Filtre = ({inputSearch , setInputSearch}) => {
 
  return (
    <div className="film">
      <Form.Control
        type="text"
        placeholder="Enter your movie" 
        onChange= { (e) => setInputSearch(e.target.value)} 
        value ={inputSearch} />
        
      
    </div>
  );
}
export default Filtre;