import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './hoverEffect.css';

export function MouseUpDown()
{
   
    const [size, setSize] = useState({width:'100px', height:'100px'});

    function handleMouseDown(){
        setSize({
            width: '400px',
            height: '400px'
        })
    }
    function handleMouseUp(){
        setSize({
            width: '100px',
            height: '100px'
        })
    }


    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <img src="iphone_15pro.jpg" style={size} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
            </div>
        </div>
    )
}