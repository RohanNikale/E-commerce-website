import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./style/style.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Search from './pages/Search';
import ProuducBuypage from './pages/ProuducBuypage';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:type" element={<Products />} />
        <Route path="/productbuy/:id" element={<ProuducBuypage />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
