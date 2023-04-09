import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Search from "./pages/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function App() {
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

  },[fetch])
  return (
    <div className="App">
      <Router>
        <Navbar userInfo={userData}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:type" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
