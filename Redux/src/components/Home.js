import React from 'react';
import Products from '../tools/Products';

const Home = () => {
  return (
    <>
    <div className='App'><h3 className='heading'>Welcome To The Redux Toolkit Folks</h3></div>

    <section className='App'>
      <h3>Products</h3>
      <Products/>
    </section>
    
    </>
  )
}

export default Home