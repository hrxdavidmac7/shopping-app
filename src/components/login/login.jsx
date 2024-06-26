import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCaptcha } from '../../Hooks/captchaHook';
import { useEffect, useState } from 'react';
export function Login()
{

    const[captcha, setCaptcha] = useState('');
    let code = useCaptcha();
    useEffect(()=>{
        setCaptcha(code);
    },[])

    function handleReload(){
        setCaptcha(code);
        
    }
    return(
        <div className="container-fluid">
            <h2>Bootstrap in React</h2>
            <button data-bs-target="#login" data-bs-toggle="modal" className='btn btn-primary'>Login</button>
            <div className='modal fade' id='login'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2>User Login</h2>
                            <button data-bs-dismiss="modal" className='btn btn-close'></button>
                        </div>
                        <div className='modal-body'>
                            <dl>
                                <dt>User Name</dt>
                                <dd><input type="text" className='form-control' /></dd>
                                <dt>Password</dt>
                                <dd><input type="password" className='form-control' / ></dd>
                                <dt>Verify code<button className='btn bi bi-arrow-clockwise' onClick={handleReload}></button></dt>
                               <dd>{captcha}</dd>
                            </dl>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-primary'>Login</button>
                            <button data-bs-dismiss="modal" className='btn btn-danger'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

