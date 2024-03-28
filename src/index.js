import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/login';
import { MouseMove } from './components/login/EventBinding/MouseMove';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Mountdemo } from './components/login/mountdemo/mountdemo';
import { Fakestore } from './components/fakestoreapi/fakestore';
import { Stylebinding } from './components/login/stylebinidng/stylebinding';
import { ClassBinding } from './components/login/stylebinidng/ClassBinding';
import { EventBinding } from './components/login/EventBinding/customargsinEvent';
import { HoverEffect } from './components/login/EventBinding/HoverEffect';
import { ButtonEvent } from './components/login/EventBinding/ButtonEvent';
import { MouseOut } from './components/login/EventBinding/MouseOverOutEvent';
import { MouseUpDown } from './components/login/EventBinding/MouseUpDown';
import { InputField } from './components/login/Text-fields/InputField';
import { ClipBoardEvent } from './components/login/Text-fields/ClipBoardEvent';
import { ElementState } from './components/login/Text-fields/ElementStateEvent';
import { Password } from './components/login/Text-fields/PasswordVerify';
import { BootstrapProgressBar } from './components/login/Text-fields/BootstrapProgressbar';
import { Debouncing } from './components/login/Text-fields/debouncing';
import { DebounceDemo } from './components/login/Text-fields/debouncing2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   
   <DebounceDemo/>

  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
