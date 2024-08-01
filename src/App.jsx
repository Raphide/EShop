import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getProductCollection } from './services/eshop-service'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import LandingPage from './Pages/LandingPage/LandingPage';
import ShopPage from './Pages/ShopPage/ShopPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import ProductLoader from './containers/ProductLoader/ProductLoader';
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage';



function App() {
  

  return (
    <>
    {/* <button onClick={getProductCollection}>Click</button> */}
      <div className="app">
        <div className="side"></div>
        <div className="shop">
        <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/shop" element={<ShopPage/>}></Route>
          <Route path="/shop/:id" element={<ProductLoader/>}></Route>
          <Route path="/favorites" element={<FavoritesPage/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
       </Routes>
        </BrowserRouter>
      </div>
      <div className="side"></div>
      </div>
    </>
  )
}

export default App
