import React from 'react'
import {Route, Routes} from "react-router";
import Home from '../Components/Homepage/Home';
// import Login from '../Components/Login/Login';
// import MensMainPage from '../Components/MenPage/MensMainPage';
import Navbar from '../Components/Navbar/Navbar';
import WishlistMainPage from '../Components/WishlistPage/WishlistMainPage';
import { TShirtMainPage } from '../Components/T-Shirt/TshirtMainPage';
//  import UserDetails from "../Components/Login/UserDetails"
import BagMainPage from '../Components/BagPage/BagMainPage';
// import OrderPlaced from "../Components/BagPage/OrderPlaced.jsx";
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import Footer from '../Components/Footer/Footer';

function Navigation() {
    return (
        <div>
           <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                   
                {/* <Route path="/shirts" element={ <TShirtMainPage/>} /> */}
                <Route path="/shirts" element={ <TShirtMainPage/>} />
                {/* <Route path="/men" element={ <MensMainPage/>}/> */}
                   
                {/* <Route path="/" element={ <Login/>}/> */}
                   
              
                {/* <Route path="/login/userdetails" element={ <UserDetails/>}/> */}
                   
                <Route path="/wishlist" element={<WishlistMainPage/>}/>
                    
               
                {/* <Route path="/result" element={ <TShirtMainPage/>} /> */}
                   
               
                {/* <Route path="/userdetails">
                    <UserDetails/>
                </Route> */}
                <Route path="/cart" element={<BagMainPage/>} />
                    
                
                {/* <Route path="/orderplaced" element={<OrderPlaced />}/> */}
                    
                
                <Route path="/shirtspage/:id" element={ <ProductDetails/>}/>
                  
               
             
            </Routes>
            <Footer/>
            
        </div>
    )
}

export default Navigation
