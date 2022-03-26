import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-medium-image-zoom/dist/styles.css'
import { ToastContainer, toast } from 'react-toastify';
import { deleteBagData, getBagData} from '../../Redux/Bag/action';
import styles from "./bag.module.css";
import wishStyles from "../WishlistPage/styles.module.css";
import { postWishData } from '../../Redux/Wishlist/action';

toast.configure()
const BagProducts = () => {

    const [bagModel, setBagModel] = useState(false)
    const [bagModelArray, setBagModelArray] = useState([])

    const bagData = useSelector(state=>state.bag.bagData)
    const dispatch = useDispatch()

    let totalAmount=0
    bagData?.map((e) => totalAmount += Math.floor(Number(e.price)*((100-Number(e.discount))/100)) * Number(e.quantity) )
    
    const handleModelBag = (idx) => {
        setBagModel(true)
        const updatedBagModel = bagData.filter( item=>item.id===idx )
        setBagModelArray(updatedBagModel)
    }

    const handleModelBagClose = () => {
        setBagModel(false)
    }
    
    const handleDeleteFromBag = (idx) => {
        setBagModel(false)
        toast.success("Item Removed from Bag")
        dispatch( deleteBagData(idx) )
    }

    const handleMoveToWishlist = (idx) => {
        dispatch( deleteBagData(idx) )
        toast.success("Item moved to wishlist")

        const updatedWishlist = bagData.filter(el=> el.id===idx )
        dispatch( postWishData(updatedWishlist[0]) )

        setBagModel(false)
    }



    useEffect(()=> {
        dispatch( getBagData() )    
        setBagModel(false)

    }, [dispatch])

    
    return (
        <div>
            <div className={styles.shopDetail}>
                <div>My Shopping Bag <span>({bagData.length} Items)</span> </div>
                <div>Total: ₹{totalAmount}</div>
            </div>

            <div>
                {
                    bagData.length>0 && bagData.map((e,i)=> 
                        <div className={styles.bagCard} key={i}>

                            <div className={styles.productDiv}>
                                <div>
                                    <img src={e.images[0]} alt="" width="100%" />
                                </div>
                                <div className={styles.productDivSecond} >
                                    <div className={styles.fontBold} >{e.title}</div>
                                    <div>{e.sub_heading}</div>
                                    <div className={`${styles.font14} ${styles.gray}`}>Sold by: Omnitech Retail </div>
                                </div>
                                <div className={styles.productDivThird}>
                                    <div className={styles.fontBold}>₹{Math.floor(Number(e.price)*((100-Number(e.discount))/100))}</div>
                                    <div>
                                        <span className={`${styles.lineThrough} ${styles.gray}`}>₹{e.price}</span>
                                        <span className={`${styles.red}`}> {e.discount}% OFF</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`${styles.gridBtn}`} >
                                <div onClick={()=>handleModelBag(e.id)} className={`${styles.removeDiv}`}> <span className={`${styles.cursor}`}>REMOVE</span> </div>
                                <div> <span onClick={()=>handleMoveToWishlist(e.id)} className={`${styles.cursor}`}>MOVE TO WISHLIST</span> </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div>
            <div >
                { bagModel && bagModelArray.map((e,i)=> 
                <div key={i}>
                <div className={styles.bagModelBg} onClick={handleModelBagClose} ></div>

                <div className={styles.bagModelCard} key={i}>
                    <div >
                        <div className={`${styles.flexBagModel} ${styles.borderBottom}`}>
                            <div>
                                <img src={e.images[0]} alt="" height="80px" />
                            </div>
                            <div className={`${wishStyles.align} ${wishStyles.marginLeft}`}>
                                <div className={` ${styles.font15} `}>Remove Item</div>
                                <div className={` ${styles.font15} ${styles.gray}`}>Are you sure you want to remove this item?</div>
                            </div>
                        </div>
                        <div className={`${styles.gridModelBtn}`} >
                            <div className={`${styles.removeDiv}`}> <span onClick={()=>handleMoveToWishlist(e.id)} className={` ${styles.cursor}`} > MOVE TO WISHLIST</span> </div>
                            <div> <span onClick={()=>handleDeleteFromBag(e.id)} className={`${styles.cursor} ${styles.blue}`}>REMOVE</span> </div>
                        </div>
                    </div>
                    
                    </div>

                    <div className={styles.closeBagModel}> 
                        <div onClick={handleModelBagClose} > × </div> 
                    </div>
                </div>
                ) }
            </div>
        </div>
        </div>
    );
};

export default BagProducts;