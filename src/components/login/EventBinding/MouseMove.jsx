

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function MouseMove()
{
   
    const [styleObj, setStyleObj] = useState({position:'', top:'', left:''})

    function handleMouseMove(e){
        setStyleObj({
            position: 'fixed',
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        })
    }

    return(
        <div className="container-fluid" onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <p>Mouse mouse pointer to test</p>
            </div>
            <img style={styleObj} src="iphone_15pro.jpg" width="50" height="50"/>
        </div>
    )
}