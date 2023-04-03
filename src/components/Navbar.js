import React, { useState } from 'react'
import "../style/style.css"
import user from '../icons/user.svg'
import cart from '../icons/cart.svg'
import wish from '../icons/wishlist.svg'

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchState,setSearch]=useState("")
  let formSubmit=(e)=>{
    e.preventDefault();
    navigate(`/search?query=hello`)

  }
  let search = (e) => {
    let query=e.target.value
    console.log("helllo")
    setSearch(query)

  }
  return (
    <div>
      {/* <button onClick={navi}>hello</button> */}
      <nav>
        <div className="nav">
          <div className="navbar">
            <div className="logo">

              <h1>onKart</h1>
            </div>



            {/* ******************************************* Serach bar ***************************************************** */}
              <form action={`/product/${searchState}`} onSubmit={formSubmit} method="get">
            <div className="search">
                <input type="text" onChange={search} value={searchState}  placeholder='search produc here' name='search' />
                <button type='submit'>
                  <i className="fa-solid fa-magnifying-glass"style={{ fontSize: '17px' }}></i>
                </button>
            </div>
              </form>


            <div className="fmenu">
              <div className="auth">
                <img src={user} alt="" />&nbsp;<span>Hello, login
                  <br />
                  &nbsp;&nbsp;My account</span>
              </div>
              <div className="cart">
                <img src={cart} alt="" />&nbsp;<span>Cart</span>
              </div>
              <div className="fav">
                <img src={wish} alt="" /><span>&nbsp; Favurite <br />&nbsp; Wish List</span>
              </div>
            </div>
          </div>
        </div>


        {/* ******************************************* Serach bar ***************************************************** */}

        <div className="msearch">
          {/* <form action="/product" method="get"> */}
            <input type="text" placeholder='search produc here' name='search' />
            <button type='submit'>
              <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
            </button>
          {/* </form> */}
        </div>


        <div className="bnavbar">
          <ul>

            <li><i className="fa-sharp fa-solid fa-bars"></i>&nbsp; category</li>
            <li>Home</li>
            <li>Deal</li>
            <li>Sell</li>
            <li>Contact</li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </ul>
        </div>
      </nav>
    </div>
  )
} 