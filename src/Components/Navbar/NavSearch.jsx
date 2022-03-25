import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css"
import searchlogo from "./navimages/search-interface-symbol.png";
import { useNavigate } from "react-router-dom"

function NavSearch() {
    const {data, filterData} = useSelector((state) => state.products)
    const dispatch = useDispatch();
    // console.log("data",data)
    let navigate = useNavigate();
    const url="result?"
    const [words, setWords]=React.useState("")
    const handleClick=()=>{
        
        navigate(`/result?catagory=${words}`)
    }
    // console.log("words",words)
    return (
        <div className={styles.navserach}>
            <button>
                <img onClick={()=>handleClick(words)} className={styles.navsearchlogo} src={searchlogo} alt="img" />
                <input onChange={(e)=>setWords(e.target.value)} value={words} placeholder="search for products, brands and more" type="text" />
            </button>
        </div>
    )
}

export default NavSearch
