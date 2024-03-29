import { useEffect, useRef, useState } from "react";
import axios from "axios";


export function Corousel(){

    const [product, setProduct] = useState({id:0, title:'', price:0, category:'', description:'', image:'', rating:{rate:0, count:0}});
    const [status, setStatus] = useState('');

    let productId = useRef(1);

    let productThread = useRef(null);

    function LoadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function LoadProductAuto(){
        productId.current++;
        axios.get(`https://fakestoreapi.com/products/${productId.current}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function handleNextClick(){
        productId.current = productId.current + 1;
        LoadProduct(productId.current);
    }
    function handlePrevClick(){
        productId.current = productId.current - 1;
        LoadProduct(productId.current);
    }

    function handlePlayClick(){
        productThread.current = setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show - Started');
    }
    function handlePauseClick(){
        clearInterval(productThread.current);
        setStatus('Slide Show - Paused');
    }

    useEffect(()=>{

        LoadProduct(1);

    },[])



    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card w-50 p-2 mt-4">
                <div className="card-header text-center">
                    <div className="card-title">{product.title}</div>
                    <div className="h3">{status}</div>
                </div>
                <div  className="card-body row text-center position-relative">
                    <div style={{width:'100px', right:'10px'}} className="badge fs-6 p-2 position-absolute bg-danger rounded rounded-circle">
                        $ {product.price}
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <button onClick={handlePrevClick} className="btn btn-dark bi bi-chevron-left"></button>
                    </div>
                    <div className="col-10">
                        <img src={product.image} width="100%" height="400" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={handlePlayClick} className="btn btn-primary bi bi-play me-2"></button>
                    <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause"></button>
                </div>
            </div>
        </div>
    )
}
