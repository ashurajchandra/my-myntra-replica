import React from 'react'
import { Navigate } from "react-router-dom";
// import ExitingDeals from './ExitingDeals'
// import HomeOffers from './HomeOffers'
// import OffersHer from './OffersHer'
// import Footer from "../Footer/Footer"


function Home() {
    return (
        <div>
            {/* <HomeOffers/>
            <OffersHer/> */}
       <Navigate to="/shirts"  />
            {/* <Footer/> */}
        </div>
    )
}

export default Home
