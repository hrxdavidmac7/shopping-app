import React from "react";
import { useState } from "react";

export function Practice(){

  const [name, setName] = useState('Samsung tv');
  const [price, setPrice] = useState(45000);
  const [quantity, setQuantity] = useState(-1);

  function handleNameChange(e){
    setName(e.target.value);
  }
  function handlePriceChange(e){
    setPrice(e.target.value);
  }
  function handleQuantitychange(e){
    setQuantity(e.target.value);
  }
  function savechanges(){
    
  }
    return(
      <div className="container-fluid">
        <h2>Data binding</h2>
        <div className="container-fluid col-4 border mt-3 pt-3 pb-3">
            Name :
            <input type="text" placeholder="Enter the product name" onChange={handleNameChange} className="form-control"></input><br/>
            Quantity ;
            <input type="number" placeholder="Enter the Quantity" onChange={handlePriceChange} className="form-control"></input><br/>
            
            <input type="checkbox" className="form-check-input" onChange={handleQuantitychange} ></input><label> Available</label><br/>

            <button type="submit" className="btn btn-warning mt-4   " onClick={savechanges()}>Save</button>
        </div>
       <div className="row">

       <div className="container-fluid col-4 pt-4 border mt-5">
            <dl className="row">
                
                    <dt className="col-3">Name</dt>
                    <dd className="col-9">{name}</dd>
                    <dt className="col-3">Price</dt>
                    <dd className="col-9">{price}</dd>
                    <dt className="col-3">Quantity</dt>
                    <dd className="col-9">{quantity==-1?"out of stock":quantity}</dd>
                
            </dl>
           
        </div>
       </div>
        
      </div>
    )
}