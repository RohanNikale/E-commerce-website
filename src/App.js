import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Test from "./components/Test";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Search from "./pages/Search";
import { Routes, Route,Link } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import "./style/style.css"
import user from './icons/user.svg'
import cart from './icons/cart.svg'
import wish from './icons/wishlist.svg'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import ProuducBuypage from "./pages/ProuducBuypage";


function App() {
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
  let [auth,setAuth]=useState(false)
  let [userData, setUserData] = useState({
    name: 'Login'
  })
  const token = Cookies.get('token')
  useEffect(() => {
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
      if(token!==undefined){

        setAuth(true)
      }
      else{
        setAuth(false)
      }
      console.log('hello')
  }, [token])

  return (
    <div className="App">
      {/* <Router> */}
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
            {!auth?
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:type" element={<Products />} />
          <Route path="/productbuy/:id" element={<ProuducBuypage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      {/* </Router> */}
    </div>
  );
}
export default App;
