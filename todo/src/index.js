import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css";
import ToDoList from "./ToDoList.js";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);


