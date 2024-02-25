import React from 'react'

export default function footer(props) {
  return (
    <div className="row fixed-bottom">
        <button className='btn btn-danger col-2' onClick={()=>{
          props.resetdata();
        }}>Reset</button>
    <div className="col-8 bg-dark text-white text-center">{props.totalamount}</div>
         <button className="btn btn-primary col-2">Pay now</button>
</div>
  )
}
