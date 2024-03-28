import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function InputField()
{

    const [users, setUsers] = useState([{UserId:''}]);
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [capsError, setCapsError] = useState({display:'none'});

    useEffect(()=>{
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    },[]);

    function handleVerifyUser(e){
        for(var user of users)
        {
            if(user.UserId===e.target.value){
                setMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                break;
            } else {
                setMsg('User Id Available');
                setErrorClass('text-success');
            }
        }
    }
    function handleVerifyPassword(e){
        if(e.which>=65 && e.which<=90) {
            setCapsError({
                display: 'block'
            })
        } else {
            setCapsError({
                display: 'none'
            })
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text" onKeyUp={handleVerifyUser} /></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={handleVerifyPassword} /></dd>
                <dd style={capsError}>
                    <span className="bi bi-exclamation-triangle-fill text-warning"></span> <span>CAPS ON</span>
                </dd>
            </dl>
        </div>
    )
}