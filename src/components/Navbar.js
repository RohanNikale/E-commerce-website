import React from 'react'
import "../style/style.css"
import user from '../icons/user.svg'
import cart from '../icons/cart.svg'
import wish from '../icons/wishlist.svg'
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav">
          <div className="navbar">
            <div className="logo">

              <h1>e-shop</h1>
            </div>
            <div className="search">
              <input type="text" placeholder='search produc here' /><button>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
              </button>
            </div>
            <div className="fmenu">
              <div className="auth">
                <img src={user} alt="" />&nbsp; Hello, login
                <br />
                &nbsp;&nbsp;My account
              </div>
              <div className="cart">
                <img src={cart} alt="" />&nbsp; Cart
              </div>
              <div className="fav">
                <img src={wish} alt="" />&nbsp; Favurite <br />&nbsp; Wish List
              </div>
            </div>
          </div>
        </div>
        <div className="msearch">
          <input type="text" placeholder='search produc here'/><button>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
              </button>
        </div>
        <div className="bnavbar">
          <ul>
            
            <li><i class="fa-sharp fa-solid fa-bars"></i>&nbsp; Shop category</li>
            <li>Home</li>
            <li>Boys</li>
            <li>Girl</li>
            <li>Kids</li>
            <li>Contact</li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </ul>
        </div>
      </nav>
    </div>
  )
} 