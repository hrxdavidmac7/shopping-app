import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './hoverEffect.css';

export function MouseOut()
{
    function handleMouseOver(e){
        e.target.stop();
    }
    function handleMouseOut(e){
        e.target.start();
    }
   
    return(
        <div className="container-fluid">
            <div className="mt-4">
                <marquee scrollamount="30" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    <img src="images/m1.jpg" className="m-4" width="200" height="200" />
                    <img src="images/m2.jpg" className="m-4" width="200" height="200" />
                    <img src="images/m3.jpg" className="m-4" width="200" height="200" />
                    <img src="images/m4.jpg" className="m-4" width="200" height="200" />
                </marquee>
            </div>
        </div>
    )
}