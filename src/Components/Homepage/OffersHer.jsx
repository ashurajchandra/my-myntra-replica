import React from 'react'

import styles from "./Home.module.css"
import Tshirt from "./Homepage Images/ForHim/Tshirt.png"
import Longwear from "./Homepage Images/ForHim/Longwear.png"
import Shirts from "./Homepage Images/ForHim/Shirts.png"
import Inner from "./Homepage Images/ForHim/Innerwear.png"
import Trac from "./Homepage Images/ForHim/Trackpants.png"
import {useNavigate } from 'react-router'

function OffersHer() {
    let lin3=[Tshirt,Longwear,Shirts,Inner,Trac]

    const navigate=useNavigate()

    return (
        <div>
        <div className={styles.dealsdiv2}>
            {lin3.map((item,j)=>(<div onClick={()=>navigate("./result")} key={j}>
                <img className={styles.dealsimg} src={item} alt="" />
            </div>))}
        </div>
        </div>
    )
}

export default OffersHer
