import React from 'react'
import {Route, Routes} from "react-router";
import Home from '../Components/Homepage/Home';
import Navbar from '../Components/Navbar/Navbar';
import WishlistMainPage from '../Components/WishlistPage/WishlistMainPage';
import { TShirtMainPage } from '../Components/T-Shirt/TshirtMainPage';
import BagMainPage from '../Components/BagPage/BagMainPage';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import Footer from '../Components/Footer/Footer';

function Navigation() {
    return (
        <div>
           <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/shirts" element={ <TShirtMainPage/>} />
                <Route path="/wishlist" element={<WishlistMainPage/>}/>
                <Route path="/cart" element={<BagMainPage/>} />
                <Route path="/shirtspage/:id" element={ <ProductDetails/>}/>  
            </Routes>
            <Footer/>
            
        </div>
    )
}

export default Navigation
