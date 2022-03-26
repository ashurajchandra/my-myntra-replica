import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css"
import searchlogo from "./navimages/search-interface-symbol.png";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
//import { useDebounce } from "use-debounce";

function NavSearch() {
     const {data, filterData} = useSelector((state) => state.products)
     
    const dispatch = useDispatch();
    // console.log("data",data)
    let navigate = useNavigate();
    const url="shirts?"
    const [words, setWords]=useState("")
    const _input=useDebounce(words,300);
    const [filteredData, setFilteredData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [apiProductData, setApiProductData] = useState("")
    //const [debouncedText] = useDebounce(words, 1000);
console.log("apiProductData",apiProductData)
    const handleMoreInfo=()=>{
        setWords("")
    }
    const handleClick=()=>{
        
        navigate(`/shirts?catagory=${words}`)
    }
    // console.log("words",words)
    const handleFilteredData=(e)=>{
        const searchWord= e.target.value;
        setWords(searchWord)

        const newFilteredData = data.filter(value=>{
            return value.title.toLowerCase().includes(words.toLowerCase())
        })
        if(words !=''){
           setFilteredData(newFilteredData )
        }
        else{
           setFilteredData([])
        }
    }
    
    useEffect(()=>{

        if(_input){
            //call the api\
            // getProductData()
            setTimeout(()=>{
                setApiProductData(data)
                console.log("hiiiiii",apiProductData)
            },500)
            console.log("CAll the api.....");
        }

    },[_input])
    async function getProductData(){
        const response = await fetch("https://masai-project.herokuapp.com/product_data")
     //    const productData =await(response);
     //    setApiProductData(productData)
     console.log("response",response)
        console.log("hi")

    }
    

    return (
        <div className={styles.navserach}>
            <button>
                <img 
                onClick={()=>handleClick(words)} className={styles.navsearchlogo} src={searchlogo} alt="img" />
                <input 
                // onChange={(e)=>setWords(e.target.value)}
                onChange={handleFilteredData}
                 value={words} 
                 placeholder="search for products, brands and more" type="text" />
            </button>

            {words.length>0 &&   <div className={styles.dataResult}>
                {/* {filteredData.slice(0,15).map((data)=>{ */}
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
                        // <p>
                            /* <a className='dataItem'  href="/"> */
                                // {data.title}
                                /* </a> */
                                // </p>
                    )
                })}
            </div>}
        </div>
    )
}

export default NavSearch


const useDebounce=(input,delayMS)=>{
    const [localInput,setinputLocal]=useState();
    const [id,setId]=useState(null);
    
   useEffect(()=>{

      if(id)
    clearInterval(id);

    const _id=setInterval(()=>{
        setinputLocal(input);
    },delayMS);

    setId(_id);


   },[input])


    return localInput;
}
