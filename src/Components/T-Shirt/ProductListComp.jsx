import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import { getData, getDataFilterBySort, getDataFilterByType, setFilterData, updateData } from "../../Redux/ProductListing/action";
import styles from "./ProductListComp.module.css"
import tagImage from "./Images/Capturenew24bg.png"
import {Link} from "react-router-dom"
import {Carousel} from "react-responsive-carousel"
import { postWishData } from "../../Redux/Wishlist/action";
function ProductListComp({sort, order, type, categoryFilters, brandFilter, priceFilter, colorFilter, discountFilter}) {
    const dispatch = useDispatch();
    const {data, filterData} = useSelector((state) => state.products)
    const [page, setPage] = useState(1);
    let [color, setColor] = useState("#ffffff");


    const handleAddDataToWishlist = (id) => {
        const wishListItem = filterData.filter(el => el.id === id) 
        dispatch(postWishData(wishListItem[0]));
    }
    
    
    const pageArray = []
    const dotsArray = [0, 1, 2, 3]

    const pageslength = type === true && sort === "" ? filterData : data
    

    for (let i = 0; i <= pageslength.length / 50; i++) {
        pageArray.push(i + 1)
    }


    useEffect(() => {
        dispatch(getData());

            if (brandFilter.length === 0 && colorFilter.length === 0 && discountFilter.length === 0) {
                dispatch(getDataFilterBySort(page, sort, order));
            }
            
            if((brandFilter.length === 1 && colorFilter.length === 1) || (brandFilter.length === 1 && discountFilter.length ===1) || (colorFilter.length === 1 && discountFilter.length === 1) || (brandFilter.length === 1 && colorFilter.length === 1 && discountFilter.length ===1)) {
                const filtersData = data.filter((item) => (item.brand === brandFilter[0] && item.color === colorFilter[0]) || (item.brand === brandFilter[0] && item.discount === discountFilter[0]) || (item.color === colorFilter[0] && item.discount === discountFilter[0]) || (item.brand === brandFilter[0] && item.color === colorFilter[0] && item.discount === discountFilter[0]));
                dispatch(setFilterData(filterData));
            } 
            else if(brandFilter.length > 0 || colorFilter.length > 0 || discountFilter.length > 0) {
                const filtersData = data.filter((item) => item.brand === brandFilter[0] || item.brand === brandFilter[1] || item.brand === brandFilter[2] || item.color === colorFilter[0] || item.color === colorFilter[1] || item.discount > discountFilter[0])
                dispatch(setFilterData(filtersData));
            }
        


        if(type === true && sort === "") {
            dispatch(getDataFilterByType(page));
        }

    }, [page, dispatch, sort, order, type, brandFilter, colorFilter, discountFilter]);


    const handleChangeDots = (id) => {
        setTimeout(() => {
            const updatedFilterData = filterData.map(item => item.id === id ? item.isdotvalue >= 3 ? {...item, isdotvalue : 0} : {...item, isdotvalue : item.isdotvalue + 1} : item)
           dispatch(updateData(updatedFilterData));
        }, 1000);
    }

    
    const handleResetDots = (id, event) => {
            const updateFilterData = filterData.map(item => item.id === id ? {...item, isdotvalue : 0} : item)
            dispatch(updateData(updateFilterData));
    }
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
    return (data.length===0)?<ClipLoader color={color}  css={override} size={90} />:(
        <>
        <div id={styles.main_wrapper}>
            <section style={{width:"100%"}}>
                <div className={styles.productBase}>
            {
                filterData.map((item) => <Link to={`/shirtspage/${item.id}`}  className={styles.link} key={item.id}><div onMouseLeave={() => handleResetDots(item.id)} onMouseOver={() => handleChangeDots(item.id)}  className={styles.item_div} >
                    <div>
                        <Carousel  showThumbs={false} selectedItem={item.isdotvalue} showIndicators={false} showArrows={false} showStatus={false}>
                            <img  alt="" src={item.images[0]} className={styles.item_image}/>
                            <img  alt="" src={item.images[1]} className={styles.item_image}/>
                            <img  alt="" src={item.images[2]} className={styles.item_image}/>
                            <img  alt="" src={item.images[3]} className={styles.item_image}/>
                        </Carousel>
             
                    {item.rating !== "" && <div className={styles.rating_wrapper}><div>{item.rating}</div><div className={styles.rating_image}><img src="https://i.imgur.com/qXeipEM.png" alt=""  style={{width:"100%"}}/></div><div>{`| ${item.review} `}</div></div> }
                    </div>
                    <div className={styles.non_hover_div}>
                        <div className={styles.item_title}>{item.title}</div>
                        <div className={styles.item_sub_heading}>{item.sub_heading}</div>
                        
                        {item.discount === 0 ? <div className={styles.price}>Rs. {item.price}</div> : <div className={styles.item_price_div}>
                            <div>Rs.<span> {Math.floor(item.price *(100-item.discount) / 100)}</span></div>
                            <div>Rs. <span>{item.price}</span></div>
                            <div><span>{`(${item.discount}% OFF)`}</span></div>
                        </div>}
                    </div>
                    <div className={styles.hover_div}>
                        <div className={styles.dots}>
                            {
                                dotsArray.map(el => <div className={ item.isdotvalue === el ? styles.dots_div2 : styles.dots_div} key={el}></div> )
                            }
                        </div>
                        <div onClick={() => handleAddDataToWishlist(item.id)} className={styles.wishlist_button}>
                            <img src="https://i.imgur.com/7l3ABgX.png" alt="wishlist_image"  style={{width:"23px", height:"23px", marginLeft:"35px",marginTop:"-5px"}}/>
                             <div className={styles.wishlist_text}>WISHLIST</div>
                             </div>
                        <div className={styles.sizes}>Sizes: {item.sizes.map((el, a) => a === item.sizes.length - 1 ? <span key={a}>{el}</span>  : <span key={el}>{`${el}, `}</span> )}</div>
                        {item.discount === 0 ? <div className={styles.price}>Rs. {item.price}</div> : <div className={styles.item_price_div}>
                            <div>Rs. {Math.floor(item.price * (100 - item.discount) / 100)}</div>
                            <div>Rs. {item.price}</div>
                            <div>{`(${item.discount}% OFF)`}</div>
                        </div>}
                    </div>
                    </div> </Link> )
            }
            </div>
            </section>
        </div>
        </>
    )
}

export default ProductListComp;