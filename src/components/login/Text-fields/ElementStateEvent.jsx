import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function ElementState()
{
    const [msg, setMsg] = useState('');
 

    function handleFocus(){
        setMsg('User Name Required');
    }

    function handleBlur(){
        setMsg('');
    }

    function handleChange(e){
        if(e.target.value.length==0){
            setMsg('User Name Required');
        } else {
            setMsg('');
        }
    }

    return(
        <div className="container-fluid">
             <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} /></dd>
                <dd>{msg}</dd>
             </dl>            
        </div>
    )
}