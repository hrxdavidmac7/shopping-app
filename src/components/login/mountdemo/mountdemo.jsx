import { useEffect, useState } from "react";
import axios from 'axios';







export function Mountdemo(){


    const [products, setProducts] = useState([{Name:'', Price:0, Stock:false}]);

    function LoadProducts(){
         var http = new XMLHttpRequest();
         http.open("get", "products.json", true);
         http.send();

         http.onreadystatechange = function(){

              console.log(http.responseText);
              if(http.readyState==4)
              { 
                  setProducts(JSON.parse(http.responseText));
              }
         }
    }

   function Loadproducts(){
    axios.get('products .json')
    .then(response=>{
        setProducts(response.data);
    }).catch(err=>{
        console.log(err);
    })
   
                
   }
   useEffect (()=>{
    Loadproducts();
    
   },[]);
   
   
   return(
    <div className="container-fluid">
        <h2>Products Table</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=>
                        <tr key={product.Name}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                            <td>{(product.Stock===true)?"Available":"Out of Stock"}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
)
}