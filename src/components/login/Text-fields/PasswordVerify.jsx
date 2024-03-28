import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function Password()
{
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [gradeValue, setGradeValue] = useState(1);
   
    function handlePasswordChange(e){
        var regExp = /(?=.*[A-Z])\w{4,15}/;
        if(e.target.value.match(regExp)){
            setMsg('Strong Password');
            setErrorClass('text-success');
            setGradeValue(100);
        } else {
            if(e.target.value.length<4){
                setMsg('Poor Password - Min 4 chars required');
                setErrorClass('text-danger');
                setGradeValue(20);
            } else {
                setMsg('Weak Password - Atleast 1 uppercase letter required');
                setErrorClass('text-warning');
                setGradeValue(60);
            }
        }
    }

    return(
        <div className="container-fluid">
             <dl>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePasswordChange} /></dd>
                <dd>
                    <meter min="1" value={gradeValue} max="100" style={{width:'200px'}}>  </meter>
                </dd>
                <dd className={errorClass} > {msg} </dd>
             </dl>            
        </div>
    )
}