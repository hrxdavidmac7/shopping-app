import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './hoverEffect.css';

export function ButtonEvent()
{

    function handleDoubleClick(){
        window.open("iphone_15pro.jpg", "Phone", "width=400 height=400");
    }
    function handleRightClick(){
        alert("You can't Right Click");
        document.oncontextmenu = function(){
            return false;
        }
    }

    return(
        <div  onContextMenu={handleRightClick} className="container-fluid">
                <img onDoubleClick={handleDoubleClick} src="iphone_15pro.jpg" width="100" height="100" />
                <p>Double click to view large.</p>
        </div>
    )
}