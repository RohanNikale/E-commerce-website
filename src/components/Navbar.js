import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import user from '../icons/user.svg';
import cart from '../icons/cart.svg';
import wish from '../icons/wishlist.svg';

export default function Navbar() {
  const navigate = useNavigate();
  const [searchState, setSearch] = useState('');
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({ name: 'Login' });
  const token = Cookies.get('token');

  useEffect(() => {
    if (token) {
      fetch('https://drab-gold-shark-boot.cyclic.app/getuserData', {
        method: 'POST',
        headers: {
          token,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((data) => setUserData(data));
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [token]);

  const formSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchState}`);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

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

            <form onSubmit={formSubmit} method="get">
              <div className="search">
                <input
                  type="text"
                  onChange={handleSearchChange}
                  value={searchState}
                  placeholder="Search products here"
                  name="search"
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '17px' }}></i>
                </button>
              </div>
            </form>

            <div className="fmenu">
              {auth ? (
                <Link to="/profile">
                  <div className="auth">
                    <img src={user} alt="" />&nbsp;<span>Hello, {userData.name}<br />&nbsp;&nbsp;My account</span>
                  </div>
                </Link>
              ) : (
                <Link to="/login">
                  <div className="auth">
                    <img src={user} alt="" />&nbsp;<span>Hello, Login<br />&nbsp;&nbsp;My account</span>
                  </div>
                </Link>
              )}
              <div className="cart">
                <img src={cart} alt="" />&nbsp;<span>Cart</span>
              </div>
              <div className="fav">
                <img src={wish} alt="" />&nbsp;<span>&nbsp;Favorite<br />&nbsp;Wish List</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={formSubmit} method="get">
          <div className="msearch">
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchState}
              placeholder="Search products here"
              name="search"
            />
            <button type="submit">
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
  );
}
