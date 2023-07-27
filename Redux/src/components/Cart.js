import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

  const products= useSelector((state)=> state.cart);


  return (
    <>
      <div >
        <h3>Your Cart <span style={{marginLeft:"80px"}}>Number :{products.length}</span></h3>
        <div>
         {products.map((pro)=>{
          return(<>
           <div>
            {pro.title}
           </div>
          </>)
         })}
        </div>
      </div>
    </>
  )
}

export default Cart