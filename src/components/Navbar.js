import React, { useState, useEffect } from 'react'
import "../style/style.css"
import user from '../icons/user.svg'
import cart from '../icons/cart.svg'
import wish from '../icons/wishlist.svg'
import Cookies from 'js-cookie'
import { useNavigate, Link } from "react-router-dom";

export default function Navbar({userInfo}) {
  const navigate = useNavigate();
  const [searchState, setSearch] = useState("")
  let formSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=hello`)

  }
  let search = (e) => {
    let query = e.target.value
    console.log("helllo")
    setSearch(query)

  }



  return (
    <div>
      <nav>
        <div className="nav">
          <div className="navbar">
            <Link to="/">
              <div className="logo">
                <h1>onKart</h1>
              </div>
            </Link>



            {/* ******************************************* Serach bar ***************************************************** */}
            <form action={`/product/${searchState}`} onSubmit={formSubmit} method="get">
              <div className="search">
                <input type="text" onChange={search} value={searchState} placeholder='search produc here' name='search' />
                <button type='submit'>
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
                </button>
              </div>
            </form>


            <div className="fmenu">
              <Link to="/login">
                <div className="auth">

                  <img src={user} alt="" />&nbsp;<span>Hello, {userInfo.name}
                    <br />
                    &nbsp;&nbsp;My account</span>
                </div>
              </Link>
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

          <form action={`/product/${searchState}`} onSubmit={formSubmit} method="get">
        <div className="msearch">
          <input type="text" placeholder='search produc here' name='search' />
          <button type='submit'>
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
          </button>
        </div>
          </form>


        <div className="bnavbar">
          <ul>

            <li><i className="fa-sharp fa-solid fa-bars"></i>&nbsp; category</li>
            <Link to="/"><li>Home</li></Link>
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