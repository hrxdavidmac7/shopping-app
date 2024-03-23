import { useState } from "react"

export function ClassBinding()
{

    const [theme, setTheme] = useState('');
    const [buttonClass, setButtonClass] = useState('btn btn-dark w-100');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('bg-dark text-white');
            setButtonClass('btn btn-light w-100');
        } else {
            setTheme('');
            setButtonClass('btn btn-dark w-100');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
             <form className={`border border-2 p-4 rounded rounded-2 ${theme}`}>
                 <h2 className="bi bi-person-fill"> User Login </h2>
                 <div className="form-switch">
                    <input type="checkbox" onChange={handleThemeChange} className="form-check-input" /> <label> Dark Mode </label>
                 </div>
                 <div className="my-2">
                    <label className="form-label"> User Name </label>
                    <div>
                        <input type="text" className="form-control"/>
                    </div>
                 </div>
                 <div className="my-2">
                    <label className="form-label"> Password </label>
                    <div>
                        <input type="password" className="form-control"/>
                    </div>
                 </div>
                 <div className="my-2">
                    <button className={buttonClass}>Login</button>
                 </div>
             </form>
        </div>
    )
}

