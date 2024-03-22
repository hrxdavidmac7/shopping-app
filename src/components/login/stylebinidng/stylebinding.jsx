import { useState } from "react"


export function Stylebinding(){
     const [styleOject, StyleObject] = useState({border:'1px solid red'});


     function handleNameChange(e){
        if(e.target.value){
            StyleObject({border:"2px solid pink"});
        }else{
            StyleObject({border:"2px solid green"});
        }
     }
    return (
        <div className="container-fluid">
            <h2>Style binding</h2>
            <dl>
                <dt>Username</dt>
                <dd><input type="text" className="remove-outline" style={styleOject}></input></dd>
            </dl>

        </div>
    )
 }