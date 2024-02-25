import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Productlist from './component/Productlist';
import Footer from './component/Footer'
import Additem from './component/Additem';
function App() {
  const productList=[
    {price:9999,
    name:"Iphone 10s",
    quantity:0,
  },
  {price:9999,
    name:"Redmi Note 3",
    quantity:0,
  }
  ]
  let [ProductListState ,setProductList]=useState(productList);
  let [totalamount,settotalamount]=useState(0);

   const incrementQuantity=(index)=>{
  let newProductlist=[...ProductListState] 
  let newtotalamount=totalamount;
  newProductlist[index].quantity++
  newtotalamount+=newProductlist[index].price;
  settotalamount(newtotalamount);
  setProductList(newProductlist); 
  }
  const decrementQuantity=(index)=>{
    let newProductlist=[...ProductListState]
    let newtotalamount=totalamount;
   if( newProductlist[index].quantity>0){newProductlist[index].quantity--;
    newtotalamount-=newProductlist[index].price;
  }
  settotalamount(newtotalamount);
    setProductList(newProductlist); 
    }
    const resetdata=(index)=>{
    let newproductList=[...ProductListState]
    newproductList.map((productList)=>{
     productList.quantity=0;
    })
    setProductList(newproductList);
    settotalamount(0);
    }

    const remove=(index)=>{
      let newProductlist=[...ProductListState]
      let newtotalamount=totalamount;
      newtotalamount-=newProductlist[index].quantity*newProductlist[index].price;
       newProductlist.splice(index,1);
       setProductList(newProductlist);
       settotalamount(newtotalamount);
      
    }
  return (
    <>
<Navbar/>
<main className='container mt-5'>
  <Additem/>
<Productlist productList={ProductListState} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} remove={remove}/>
</main>
<Footer totalamount={totalamount} resetdata={resetdata}/>
    </>
  );
}

export default App;
