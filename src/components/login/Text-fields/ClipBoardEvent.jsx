import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function ClipBoardEvent()
{
   
    const [msg, setMsg] = useState('');

    function handleCopy(){
        setMsg('Copied to Clipboard');
    }

    function handleCut(){
        setMsg('Removed and copied to clipboard');
    }

    return(
        <div className="container-fluid">
             <dl>
                <dt>Account Number</dt>  
                <dd><input type="text" onCut={handleCut} onCopy={handleCopy} /></dd>
                <dd>{msg}</dd>
                <dt>Confirm Account</dt>
                <dd><input type="text" /></dd>
             </dl>            
        </div>
    )
}