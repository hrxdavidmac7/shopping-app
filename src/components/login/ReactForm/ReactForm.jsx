import { useState } from "react"


export function ReactForm()
{
    const [product, setProduct] = useState({Name:'', Price:0, City:''})

    function handleNameChange(e){
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City : product.City
        })
    }
    function handlePriceChange(e){
        setProduct({
            Name: product.Name,
            Price: e.target.value,
            City: product.City
        })
    }
    function handleCityChange(e){
        setProduct({
            Name: product.Name,
            City: e.target.value,
            Price: product.Price
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(product);
    }


     return(
        <div className="container-fluid">
            <h3>Register Product</h3>
            <form onSubmit={handleFormSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={handleNameChange} /></dd>
                    <dt>Price</dt>
                    <dd><input type="number" onChange={handlePriceChange} /></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={handleCityChange}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
     )
}
