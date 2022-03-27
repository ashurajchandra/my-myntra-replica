import React from 'react'
import { Navigate } from "react-router-dom";


function Home() {
    return (
        <div>
       <Navigate to="/shirts"  />
        </div>
    )
}

export default Home
