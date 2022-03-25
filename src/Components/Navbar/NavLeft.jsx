import React from 'react'
import Logo from "./navimages/Myntra-logo-png-ico.png"
import styles from "./Navbar.module.css"
import { useNavigate } from "react-router-dom";

function NavLeft() {
    let navigate= useNavigate();
    return (
        <div onClick={()=>navigate("/")} className={styles.logodiv}>
            <img className={styles.logo} src={Logo} alt="logo" />
        </div>
    )
}

export default NavLeft
