import logo from './logo.svg';
import './App.css';
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
     
      
    </div>
  );
}

export default App;
