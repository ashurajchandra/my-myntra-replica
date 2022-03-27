import React, { useState } from 'react';
import hamIcon from "./navimages/ham-icon.png";
import userlogo from "./navimages/user.png";
import wishlist from "./navimages/heart.png"
import bag from "./navimages/shopping-bag.png"
import styles from "./Navbar.module.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function NavRight() {
    let navigate= useNavigate();
    const bagData = useSelector(state => state.bag.bagData)
    const [showHamIcons, setShowHamIcons] = useState(false);

    const handleDisplayProfile=()=>{
        setShowHamIcons(!showHamIcons)
    }
    return (
        <>
        <div className={styles.userdiv}>
            <div>
            <h5><img className={styles.userlogo} src={userlogo} alt="" />
                <br/>Profile</h5>
            </div>
            <div onClick={()=>navigate("/wishlist")}> 
            <h5><img className={styles.userlogo} src={wishlist} alt="" />
               <br/> Wishlist</h5>
            </div>
            <div onClick={()=>navigate("/cart")}>
            <h5><img className={styles.userlogo} src={bag} alt="" />
                    <div className={styles.countnav}>{bagData.length}</div>
                <br/>Bag</h5>
                
            </div>
        </div>

        <div className={styles.bars}>
                <img src={hamIcon} alt="ham-icon" onClick={ handleDisplayProfile } />
                {
                    showHamIcons &&
                    <div className={styles.showProfile}>
                         <div>
            <h5><img className={styles.userlogo} src={userlogo} alt="" />
                <br/>Profile</h5>
            </div>
            <div onClick={()=>navigate("/wishlist")}> 
            <h5><img className={styles.userlogo} src={wishlist} alt="" />
               <br/> Wishlist</h5>
            </div>
            <div onClick={()=>navigate("/cart")}>
            <h5><img className={styles.userlogo} src={bag} alt="" />
                    <div className={styles.countnav}>{bagData.length}</div>
                <br/>Bag</h5>
                </div>
                    </div>
                }
            </div>

        </>
    )
}

export default NavRight
