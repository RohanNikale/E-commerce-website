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

              <h1>onKart</h1>
            </div>
            <div className="search">
              <input type="text" placeholder='search produc here' /><button>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
              </button>
            </div>
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
        <div className="msearch">
          <input type="text" placeholder='search produc here'/><button>
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
              </button>
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