import React, { useState, useEffect } from 'react'
import "../style/style.css"
import user from '../icons/user.svg'
import cart from '../icons/cart.svg'
import wish from '../icons/wishlist.svg'
import Cookies from 'js-cookie'
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchState, setSearch] = useState("")
  let formSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchState}`)

  }
  let search = (e) => {
    let query = e.target.value
    // console.log(query)
    setSearch(query)

  }

  let [userData, setUserData] = useState({
    name: 'Login'
  })
  useEffect(() => {
    const token = Cookies.get('token')
    fetch('http://localhost:8000/getuserData', {
      method: 'POST',
      headers: {
        'token': token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setUserData(data)
      })

  }, [userData])
  let token = Cookies.get('token')

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
            <form onSubmit={formSubmit} method="get">
              <div className="search">
                <input type="text" onChange={search} value={searchState} placeholder='search produc here' name='search' />
                <button type='submit'>
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
                </button>
              </div>
            </form>


            <div className="fmenu">
            {token===undefined?
              <Link to="/login">
                <div className="auth">

                  <img src={user} alt="" />&nbsp;<span>Hello, Login
                    <br />
                    &nbsp;&nbsp;My account</span>
                </div>
              </Link>:
              <Link to="/profile">
                <div className="auth">

                  <img src={user} alt="" />&nbsp;<span>Hello, {userData.name}
                    <br />
                    &nbsp;&nbsp;My account</span>
                </div>
              </Link>
              }
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

        <form onSubmit={formSubmit} method="get">
          <div className="msearch">
                <input type="text" onChange={search} value={searchState} placeholder='search produc here' name='search' />

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