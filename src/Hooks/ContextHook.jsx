import { createContext, useContext, useState } from "react"

let userContext = createContext(null);

export function Level1(){
    let userName = useContext(userContext);
    return(<div className="bg-danger text-white p-2">
        <h3>Level 1 component-{userName}</h3>
        <Level2/>
    </div>)
}
export function Level2(){
    let userName = useContext(userContext);
    return(<div className="bg-primary text-white p-4">
        <h3>Level 2 component -{userName}</h3>
    </div>)
}



export function ContextDemo(){

    const[userName, setUserName] = useState('John');
    return(
        <div className="bg-dark text-white p-4">
            <userContext.Provider value={userName}>
            <h1>Parent component - {userName}</h1>
            <Level1/>
            </userContext.Provider>
           
        </div>
    )
}