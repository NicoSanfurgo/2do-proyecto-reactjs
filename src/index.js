import React from 'react';
import ReactDOM from 'react-dom/client';
import {initializeApp} from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyBqI9yVGgKRHiGON097nbPg3F17X5l6sy8",
  authDomain: "coder-eccomerce-proyect.firebaseapp.com",
  projectId: "coder-eccomerce-proyect",
  storageBucket: "coder-eccomerce-proyect.appspot.com",
  messagingSenderId: "1028875631441",
  appId: "1:1028875631441:web:f30f1c220dbee5b5a37170",
  measurementId: "G-B3FXXH4RXJ"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
