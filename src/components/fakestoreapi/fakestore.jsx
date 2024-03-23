import { useEffect, useState } from "react";
import axios from "axios";

export function Fakestore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:'', price:0, description:'', image:'', category:'', rating:{rate:0, count:0}}]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    function LoadCategories() {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
            response.data.unshift("all");
            setCategories(response.data);
        });
    }

    function LoadProducts(url) {
        axios.get(url)
        .then(response => {
            setProducts(response.data);
        });
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
    }, []);

    function handleCategoryChange(e) {
        if (e.target.value === 'all') {
            LoadProducts('https://fakestoreapi.com/products');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function GetCartCount() {
        setCartCount(cartItems.length);
    }

    function handleAddToCartClick(product) {
        setCartItems([...cartItems, product]);
        alert(`${product.title}\nAdded to Cart`);
        GetCartCount();
    }

    function handleRemoveClick(index) {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    }

    return (
        <div className="container-fluid">
            <header className="d-flex bg-dark text-white justify-content-between p-1 border border-2 mt-2">
                <h2>Fakestore</h2>
                <div className="fs-5">
                    <span className="me-2"> Home </span>
                    <span className="me-2"> Electronics </span>
                    <span className="me-2"> Men's Fashion </span>
                    <span className="me-2"> Women's Fashion </span>
                    <span className="me-2"> Jewelry </span>
                </div>
                <div>
                    <span className="bi bi-heart-fill me-3"></span>
                    <span className="bi bi-person-fill me-3"></span>
                    <button onClick={() => setShowModal(true)} className="btn btn-warning bi bi-cart4 position-relative"> <span className="badge bg-danger position-absolute rounded rounded-circle"> {cartCount} </span> </button>
                    {showModal && (
                        <div className="modal fade show" id="Cart" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="text-primary">Your Cart Items</h2>
                                        <button className="btn btn-close" data-bs-dismiss="modal" onClick={() => setShowModal(false)}></button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Price</th>
                                                    <th>Preview</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cartItems.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{item.title}</td>
                                                            <td>{item.price}</td>
                                                            <td> <img src={item.image} width="50" height="50" alt={item.title} /> </td>
                                                            <td> <button onClick={() => { handleRemoveClick(index) }} className="btn btn-danger bi bi-trash"></button> </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <section className="mt-4 row">
                <nav className="col-2">
                   <div>
                     <label className="form-label fw-bold">Select Category</label>
                     <div>
                        <select className="form-select" onChange={handleCategoryChange}>
                          {
                            categories.map(category => (
                                <option value={category} key={category}> {category.toUpperCase()} </option>
                            ))
                          }
                        </select>
                     </div>
                   </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{ height: '500px' }}>
                   {
                      products.map(product => (
                         <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }}>
                             <div className="image-container" style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={product.image} className="card-img-top" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} alt={product.title} />
                             </div>
                             <div className="card-header" style={{ height: '90px', overflow: 'hidden' }}>
                                {product.title}
                             </div>
                             <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd> {product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                </dl>
                             </div>
                             <div className="card-footer">
                                <button onClick={() => { handleAddToCartClick(product) }} className="btn bi bi-cart4 btn-dark w-100"> Add to Cart </button>
                             </div>
                         </div>
                      ))
                   }
                </main>
            </section>
        </div>
    );
}
