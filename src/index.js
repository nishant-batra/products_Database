import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAOmvqdFgW4lb_Z86j2I6sZiGYhGOxEIbA",
  authDomain: "cart-f10f7.firebaseapp.com",
  projectId: "cart-f10f7",
  storageBucket: "cart-f10f7.appspot.com",
  messagingSenderId: "504008959842",
  appId: "1:504008959842:web:b4e83013e5896e8db92e3b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

