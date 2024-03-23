import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Mountdemo } from './components/login/mountdemo/mountdemo';
import { Fakestore } from './components/fakestoreapi/fakestore';
import { Stylebinding } from './components/login/stylebinidng/stylebinding';
import { ClassBinding } from './components/login/stylebinidng/ClassBinding';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   
    <ClassBinding/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
