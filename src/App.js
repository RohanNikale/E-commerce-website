import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { AuthProvider } from './AuthContext';
import Cart from './pages/Cart';
import CodeEditorWindow from './pages/codeEditor';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:type" element={<Products />} />
          <Route path="/productbuy/:id" element={<ProuducBuypage />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/codeeditor" element={<CodeEditorWindow />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
