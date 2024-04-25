import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Add() {

  const data = [
    {
      name : 'apple',
      price : 20
    },
    {
      name : 'orange',
      price : 20
    },
    {
      name : 'grapes',
      price : 20
    }
  ];

  const [name, setName] = useState(data);
  
  
  const [inputV, setInputV]=useState('no data');


  function handleSubmit(a){
    setName(
      [
        ...name, {name : inputV, price : 60}
      ]
    );
  }


//   function handleDelete(a){
//       let filteredArray = name.filter((val)=>{
//         if(val.name == a){
//           return false;
//         }else{
//           return true;
//         }
//       });
      
//       setName(filteredArray);
//   }

//   function handleChange(a){
//     let changedArray = name.map((val)=>{
//       if(val.name == a){
//           return {...val, name: a+'123'}
//       }else{
//         return val;
//       }
//     })

//     setName(changedArray);
//   }


  return (
    <div className="App">
      <h2>Appp</h2>

      {
        name.map((val)=>{
          return (
            <div>
              <li>{val.name} 
              {/* <button onClick={()=>{ handleDelete(val.name) }}>delete</button> 
              <button onClick={()=>{handleChange(val.name)}}>change</button> */}
              </li>
            </div>
          )
        })
      }
  

      {/* <button onClick={()=>{
        [
          {name:'apple', price: 80}, ...name
        ]
      }}>Add</button> */}


      <input  onChange={ (event)=>{ setInputV(event.target.value);} }/>
      <button onClick={()=>{ handleSubmit() }}>submit</button>
      
    </div>
  );

}


export default Add;
