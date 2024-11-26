import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storecontext';

const Navbar = ({setshowlogin}) => {

  const [menu,setmenu]=useState("home");

  const {gettotalcartAmount}=useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#exploremenu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#Appdownload' onClick={()=>setmenu("mobile")} className={menu==="mobile"?"active":""}>Mobile</a>
        <a href='#footer' onClick={()=>setmenu("contact")} className={menu==="contact"?"active":""}>Contact us</a>
      </ul>
      <div className="navnar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          
          <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={gettotalcartAmount()===0?"":"dot"}>

          </div>
        </div>
        <button onClick={()=>setshowlogin(true)}>sign in</button>
      </div>
      
    </div>
  )
}

export default Navbar
