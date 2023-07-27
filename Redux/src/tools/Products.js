import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {add} from '../store/createSlice';

const Products = () => {

    const dispatch=useDispatch();

    const [product, setproduct] = useState([]);

    useEffect(() => {
        const fetchproducts = async () => {

            const res = await fetch('https://fakestoreapi.com/products');

            const data = await res.json();

            setproduct(data);

        }

        fetchproducts();

    }, [])

   const handleadd=(product)=>{
    // const newproduct=product;
    dispatch(add(product));
   }


    return (
        <>
            <div className='ProductWrapper' style={{display:"inline-grid",border:"3px solid red"}}>
            {
                product.map((val)=>{
                    return(<>
                    <div>
                        <p>{val.title}</p>
                        <img width="200px" height="60px" src={val.image} alt='no image'/>
                        <button className='App' onClick={handleadd}>AddTo cart</button>
                    </div>
                    
                    </>) 
                })
            }

            </div>


        </>
    )
}

export default Products