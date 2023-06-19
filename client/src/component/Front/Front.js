import React, { Fragment } from 'react'
import {CgMouse} from "react-icons/cg"
import "./Front.css"
import Product from "./Product.js"
import MetaData from '../layout/MetaData'


const product={
  name:"Blue Tshirt",
  images:[{url:"https://media.istockphoto.com/id/183870483/photo/happy-smiling-man-portrait.jpg?s=612x612&w=0&k=20&c=5GHczx8C-aVK9PlI0afP7c2PaDVaKyXs-WVN7btQYDI="}],
  price:"3000",
  _id:"shivang"
}

const Front = () => {
  return (
    <Fragment>
      <MetaData title="UN-STOP"/>
        <div className='banner'>
          <p>Welcome to UN-STOP</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
                <button>
                    Scroll <CgMouse />
                </button> 
            </a>
        </div>
        <h2 className='homeHeading'>Featured Products</h2>
        <div className='container' id="container">
          <Product product={product} /> 
          <Product product={product} /> 
          <Product product={product} /> 
          <Product product={product} /> 

          <Product product={product} /> 
          <Product product={product} /> 
          <Product product={product} /> 
          <Product product={product} /> 

        </div>
    </Fragment>
  )
}

export default Front
