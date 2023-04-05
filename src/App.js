import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Search from "./pages/Search";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Products/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}
export default App;
