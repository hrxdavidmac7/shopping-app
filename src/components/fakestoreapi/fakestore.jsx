import { useEffect, useState } from "react";
import axios from "axios";

export function Fakestore(){

       const[categories, setCategories] = useState([]);
       const[products, setProducts] = useState([{
        id:0,
        title:"",
       price:0,
       description:"",
       image:"",
       category:"",
       rating:{
        rate:0,
        count:0
       }

   }]);


    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories').then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        }).catch(err=>{
            console.log(err);
        })
            

    }


    function LoadProducts(){
        axios.get('https://fakestoreapi.com/products').then(response=>{
            setProducts(response.data);
        })
      
    }
    useEffect(()=>{
        LoadCategories();
        LoadProducts();

    },[]);



    return(
       
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-3 m-2 border border-2 bg-dark text-bg-primary">
               
                    <h2>FakeStore</h2>
                    <div className="fs-5">
                      <span className="me-2">Home</span>
                      <span className="me-2">Men</span>
                      <span className="me-2">Women</span>
                      <span className="me-2">Kids</span>
                      <span className="me-2">Resource</span>
                   
                    </div>
                    <div>
                        <span className="bi bi-heart-fill me-3"></span>
                        <span className="bi bi-person-fill me-3"></span>
                        <button className="btn btn-warning bi bi-cart4 position-relative"><span className="badge bg-success position-absolute rounded rounded-circle">0</span></button>
                    </div>
                
            </header>
            <section className="mt-4 row ">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select className="form-select">
                                {
                                    categories.map(category=>(
                                        <option key={category}>{category.toUpperCase()}</option>
                                    ))
                                }
                                
                            </select>
                        </div>
                    </div>

                </nav>
                <main className="col-10 bg-primary d-flex flex-wrap overflow-auto" style={{height:'550px'}}>
                   {
                    products.map(product=>
                    <div  key={product.id} className="card m-2 p-2" style={{width:'250px'}}>
                        <img src={product.image} className="card-img-top" height= '120px'  />

                        
                        <div className="card-header" style={{height:'100px'}}>
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Product</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>{product.rating.rate}<span className="bi bi-star-fill text-success"></span></dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn bi bi-cart4 btn-dark w-100">Add to cart</button>
                        </div>
                    </div>
                    )  }

                </main>

            </section>

        </div>
    )
}