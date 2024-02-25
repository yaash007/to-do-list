import React from 'react'

 export default function product(props) {
  return (
    <div className='row mt-3' >
<div className='col-5'>
 <h2>{props.product.name}<span class="badge bg-secondary">₹{props.product.price}</span></h2>
</div>
<div className='col-3'>
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger" onClick={()=>{props.decrementQuantity(props.index)}}>-</button>
  <button type="button" class="btn btn-warning">{props.product.quantity}</button>
  <button type="button" class="btn btn-success" onClick={()=>{props.incrementQuantity(props.index)}}>+</button>
</div>
</div>
<div className='col-2'>
{props.product.quantity*props.product.price}
</div>
<div className="col-2 btn btn-danger" onClick={()=>{
  props.remove(props.index);
}}>
Remove
</div>
    </div>
    
  )
}
