import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import App from './App';
import reportWebVitals from './reportWebVitals';
=======
import reportWebVitals from './reportWebVitals';
import Gallery from './Gallery';
import ToDoList from './ToDoList';
// import ButtonPannel from './ButtonPannel';
// import ImagesDetails from './ImagesDetails';
>>>>>>> 223b0f1678ff84eacaab7e0049db6be87d1941b1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    {/* <ToDoList /> */}
    <Gallery />
>>>>>>> 223b0f1678ff84eacaab7e0049db6be87d1941b1
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
