import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import ImageView from './components/ImageView';
import ButtonPannel from './components/ButtonPannel';
import { useState } from 'react';
import Header from './components/Header';
import Imageslider from './components/Imageslider';

function App() {
  const[status,setStatus]=useState("");
  return (
    <div className="App">
      <Header/>
      <Imageslider/>
      <ButtonPannel send={(a)=>{setStatus(a)}}/>
     
     <ImageView status={status}/>
     
      
=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 223b0f1678ff84eacaab7e0049db6be87d1941b1
    </div>
  );
}

export default App;
