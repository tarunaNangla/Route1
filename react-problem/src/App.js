// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Problem1/Home';
import AllProducts from './Problem1/AllProducts';
import Productdetails from './Problem1/Productdetails';
import {Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div style={{display:"flex",gap:"40px", justifyContent:"center",background:"teal"}}>
           <div>
             <Link to="/"><h1>HOME</h1></Link>
           </div>

           <div>
             <Link to="/products"><h1>ALL PRODUCTS</h1></Link>
           </div>

         <div>
            <Link to="/products/:id"><h1>PRODUCT DETAILS</h1></Link>
          </div>

      </div>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<AllProducts />} />
           {/* <Route path="/products/id" element={<Productdetails />} /> */}
           <Route path="/product/:id" element={<Productdetails />}>

           </Route>
      </Routes>
    </div>
  );
}

export default App;
