import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import styles from "./Navbar.module.css"
import NavSearch from "./NavSearch"

function Navbar() {
    const navData=[
        {title:"men"},
        {title:"women"},
        {title:"kids"},
        {title:"home&livings"},
        {title:"beauty"},
    ]

    return (
        <div className={styles.navbar}>
            <NavLeft/>
          <div className={styles.categories}>
                       {navData.map((item,j)=>(
                                <h4 className={styles.navLinks}>{item.title.toUpperCase()}</h4>
                       ))}
                       </div>
            <NavSearch/>
            <NavRight/> 
        </div>
    )
}

export default Navbar
