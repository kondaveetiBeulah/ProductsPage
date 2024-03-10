import React from 'react'
import './App.css'
import ProductsDetails from './Components/ProductsDetails'
import {useState, useEffect} from 'react'


const App = () => {
    const [fake,setFake] = useState([]);
    console.log(fake);

    useEffect(() =>{
      fakeStore();
    },[])
  
  const fakeStore = async() =>{
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json()
    const updatedData = fetchedData.products.map(product => ({
      title: product.title,
      brand: product.brand,
      price: product.price,
      id: product.id,
      imageUrl: product.image_url,
      rating: product.rating,
    }))
    setFake(updatedData)
  return(
    <>
      <h2>Fake API Store</h2>
      <ul className="products-list">
          {productsList.map(product => (
            <ProductsDetails productData={product} key={product.id} />
          ))}
        </ul>
      </>
  )
}

export default App