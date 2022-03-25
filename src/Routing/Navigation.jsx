import React from 'react'
import {Route, Routes} from "react-router";
import Home from '../Components/Homepage/Home';
import Login from '../Components/Login/Login';
import MensMainPage from '../Components/MenPage/MensMainPage';
import Navbar from '../Components/Navbar/Navbar';
import WishlistMainPage from '../Components/WishlistPage/WishlistMainPage';
import { TShirtMainPage } from '../Components/T-Shirt/TshirtMainPage';
 import UserDetails from "../Components/Login/UserDetails"
import BagMainPage from '../Components/BagPage/BagMainPage';
import OrderPlaced from "../Components/BagPage/OrderPlaced.jsx";
import ProductDetails from '../Components/ProductDetails/ProductDetails';

function Navigation() {
    return (
        <div>
           <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                   
              
                <Route path="/men" element={ <MensMainPage/>}/>
                   
                <Route path="/login" element={ <Login/>}/>
                   
              
                <Route path="/login/userdetails" element={ <UserDetails/>}/>
                   
                <Route path="/wishlist" element={<WishlistMainPage/>}/>
                    
               
                <Route path="/result" element={ <TShirtMainPage/>} />
                   
               
                {/* <Route path="/userdetails">
                    <UserDetails/>
                </Route> */}
                <Route path="/cart" element={<BagMainPage/>} />
                    
                
                <Route path="/orderplaced" element={<OrderPlaced />}/>
                    
                
                <Route path="/resultpage/:id" element={ <ProductDetails/>}/>
                  
               
             
            </Routes>
            
        </div>
    )
}

export default Navigation
