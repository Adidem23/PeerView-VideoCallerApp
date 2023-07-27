import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const items=useSelector((state)=>state.cart);

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly",background:"slateblue" , fontSize:"bold" ,color:"white"}}>
            <span className='logo'>
                Demon Store
            </span>

            <div>
                <Link to="/" className='navlink'style={{marginRight:"20px",color:"Black",listStyle:"none",textDecoration:"none"}}>Home</Link>
                <Link to="/cart" className='navlink' style={{marginRight:"20px",color:"Black",listStyle:"none",textDecoration:"none"}}>Cart</Link>
            </div>

            <div>
            <span className='cartcount'>Cart Count:{items.length}</span>
            </div>

        </div>
    )
}

export default Navbar