import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './globalStyles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <ToastContainer/>
    </BrowserRouter>
)
