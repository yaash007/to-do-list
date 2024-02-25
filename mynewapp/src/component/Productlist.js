import React from 'react'
import Product from './product'
export default function Productlist
(props) {
  
  return (
    props.productList.length>0?
   props.productList.map((product,i)=>{
      return<Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} remove={props.remove}/>
   })
   :<h1>Plzz add product in cart</h1>
  )
}
