import { useEffect, useState } from "react"


export function Login(){

    useEffect(()=>{
        console.log("Login Component Mounted");
        return()=>{
            console.log("Login Component Unmounted");
        }
    },[]);

    return(
        <h1>User Login</h1>
    )
}

export function Register(){

    useEffect(()=>{
        console.log("Register Component Mounted");
        return()=>{
            console.log("Register Component Unmounted");
        }
    },[]);
    return(
        <h1>Register New User</h1>
    )
}

export function HookDemo()
{
    const [component, setComponent] = useState();


    function handleLoginClick(){
        setComponent(<Login />);
    }
    function handleRegisterClick(){
        setComponent(<Register />);
    }

    return (
        <div className="container-fluid">
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
            <hr />
            {component}
        </div>
    )
}