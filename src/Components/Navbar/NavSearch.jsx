import React from 'react'
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css"
import searchlogo from "./navimages/search-interface-symbol.png";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import {Link} from "react-router-dom";


function NavSearch() {
    const {data} = useSelector((state) => state.products)
    const [words, setWords]=useState("")
    const [filteredData, setFilteredData] = useState([]);
    const handleMoreInfo=()=>{
        setWords("")
    }
    const handleFilteredData=(e)=>{
        const searchWord= e.target.value;
        setWords(searchWord)

        const newFilteredData = data.filter(value=>{
            return value.title.toLowerCase().includes(words.toLowerCase())
        })
        if(words !==''){
           setFilteredData(newFilteredData )
        }
        else{
           setFilteredData([])
        }
    }
  

    return (
        <>
        <div className={styles.navserach}>
            <button>
                <img 
                className={styles.navsearchlogo} src={searchlogo} alt="img" />
                <input 
                onChange={handleFilteredData}
                 value={words} 
                 placeholder="search for products, brands and more" type="text" />
            </button>
            {words.length>0 &&   <div className={styles.dataResult}>
                {filteredData.map((data)=>{
                    return(
                        <div className={styles.searchResults}>
                        <div className={styles.searchResult}>
                            <img src={data.images[0]} alt='search-pic' />
                            <div className={styles.movieInfo}>
                                <span>{data.title}</span>

                                <Link to={`/shirtspage/${data.id}`}>
                                <button 
                                onClick={(e)=>handleMoreInfo(e)}
                                >More Info</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>}
        </div>
        
        </>
    )
}

export default NavSearch

