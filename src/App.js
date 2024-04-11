import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout"; //sin llaves
import Home from "./pages/Home.js"; //sin llaves
import Product from "./pages/Product.js"; //sin llaves
import Dasboard from "./pages/Dasboard.js"; //sin llaves
import Default from "./pages/Default.js"; //sin llaves

function App() {
  return (
    <div>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<Dasboard/>}/>
                   <Route path='/product' element={<Product/>}/>
                      <Route path='*' element={<Default/>}/>                   
                      
        </Route>
      </Routes>
    </div>
  );
}
export default App;
