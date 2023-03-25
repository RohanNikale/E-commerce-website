import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Products/>
      <Footer/>
    </div>
  );
}
export default App;
