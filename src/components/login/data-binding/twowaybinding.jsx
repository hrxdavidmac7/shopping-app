import { useState } from "react";

export function Twowaybinding(){

    const [username, setUsername] = useState('hrxdavidmac');
    function handlechange(event){
        setUsername(event.target.value);

    }
    const[name, setName] = useState('TV');
    const[price, setPrice] = useState(45000);
    const[stock, setStock] = useState(true);
    const[city, setCity] = useState(-1);
    function handleNameChange(event){
       setName (event.target.value)
    }
    function handlePriceChange(event){
        setPrice (event.target.value)
     }
     function handleStockChange(event){
        setStock (event.target.checked)
     }
     function handleCityChange(event){
        setCity (event.target.value)
     }
     return(
        <div className="container-fluid">
           <div className="row mt-3">
              <div className="col-3">
                <h3>Edit Product</h3>
                <dl>
                    <dt>Product Name</dt>
                    <dd><input type="text" onChange={handleNameChange} value={name} className="form-control" /></dd>
                    <dt>Price</dt>
                    <dd><input type="number" onChange={handlePriceChange} value={price} className="form-control" /></dd>
                    <dt>Stock</dt>
                    <dd><input type="checkbox" onChange={handleStockChange} checked={stock} className="form-check-input" /> <label>Available</label> </dd>
                    <dt>Shipped To</dt>
                    <dd>
                        <select value={city} onChange={handleCityChange} className="form-select">
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyd</option>
                        </select>
                    </dd>
                    <dt></dt>

                    <dd> <button className="btn btn-warning">Submit</button></dd>
                </dl>
               
              </div>
              
              <div className="col-9">
                  <h3>Product Details</h3>
                  <dl className="row">
                    <dt className="col-3">Name</dt>
                    <dd className="col-9">{name}</dd>
                    <dt className="col-3">Price</dt>
                    <dd className="col-9">{price}</dd>
                    <dt className="col-3">Stock</dt>
                    <dd className="col-9">{(stock===true)?"Available":"Out of Stock"}</dd>
                    <dt className="col-3">Shipped To</dt>
                    <dd className="col-9">{(city==="-1")?"Please Select City":city}</dd>
                  </dl>
              </div>
           </div>
        </div>
    )
}