import React from 'react'
import './App.css'

import {useState, useEffect} from 'react'

const App = () =>{
  //https://fakestoreapi.com/products
  const [fake,setFake] = useState([]);
  console.log(fake)
  useEffect(() =>{
    fakeStore();
  },[])
  const fakeStore = async() =>{
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json()
    setFake(jsonData)
  }
  
  return(

    <>
      <h2>Fake API Store</h2>
      <div className="container">
        {fake.map((values)=>{
          return(
            <>
            <div className="box">
          <div className="content">
            <h5>{values.title}</h5>
            <img src={values.image} alt=""/>
            <p>{values.description}</p>
          </div>
        </div>
            </>
          )
        })}
  
      </div>
    </>

  )
}
export default App
