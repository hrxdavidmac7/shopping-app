import { useState } from "react";

export function Twowaybinding(){

    const [username, setUsername] = useState('hrxdavidmac');
    function handlechange(event){
        setUsername(event.target.value);

    }
    const[name, setName] = useState('TV');
    const[price, setPrice] = useState(45000);
    const[Stock, setStock] = useState(true);
    const[city, setCity] = useState(-1);
    function handlenamechange(event){
       setName (event.target.value)
    }
    function handlepricechange(event){
        setPrice (event.target.value)
     }
     function handlestockchange(event){
        setStock (event.target.value)
     }
     function handlecitychange(event){
        setCity (event.target.value)
     }
    return(
        <div className="container-fluid">
            <div className="form-control">
                <h1>Register product</h1>
                <dl>
                    <dt>Product name</dt>
                    <dd><input type="text" onChange={handlenamechange}></input></dd>
                    <dt>Product price</dt>
                    <dd><input type="number " onChange={handlepricechange}></input></dd>
                    <dt>Stock</dt>
                    <dd><input type="checkbox"  onChange={handlestockchange}></input>Available</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={handlecitychange}>

                            <option>Agara</option>
                            <option>Lucknow</option>
                            <option>Sitapur</option>
                            <option>Delhi</option>
                            <option>Iris</option>
                        </select>
                    </dd>
                </dl>
            </div>

            <div className="col-6">
                <h2>Product details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{name}</dd>
                    <dt>Price</dt>
                    <dd>{price}</dd>
                    <dt>Stock</dt>
                    <dd>{Stock}</dd>
                    <dt>Shipped to</dt>
                    <dd>{city}</dd>
                    

                    



                </dl>


            </div>
           
        
        </div>
    )

}