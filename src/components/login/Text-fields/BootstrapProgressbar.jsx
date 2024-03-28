import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function BootstrapProgressBar()
{
    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState({width:''});
    const [color, setColor] = useState('');
   
    function handlePasswordChange(e){
        var regExp = /(?=.*[A-Z])\w{4,15}/;
        if(e.target.value.match(regExp)){
            setStatus({width:'100%'});
            setMsg('Strong Password');
            setColor('bg-success');
        } else {
            if(e.target.value.length<4){
                setStatus({width:'30%'});
                setMsg('Poor Password');
                setColor('bg-danger');
            } else {
                setStatus({width:'60%'});
                setMsg('Weak Password');
                setColor('bg-warning');
            }
        }
    }

    return(
        <div className="container-fluid">
             <dl>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePasswordChange} /></dd>
                <dd className="progress" style={{width:'200px'}}>
                    <div style={status} className={`progress-bar progress-bar-animated progress-bar-striped ${color}`}>
                        {msg}
                    </div>
                </dd>
               
             </dl>            
        </div>
    )
}