import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./Product.module.css"
// import SubNavbar from "../WishlistPage/SubNavbar"
import { useDispatch } from 'react-redux'
import { postWishData } from '../../Redux/Wishlist/action'
import { postBagData } from '../../Redux/Bag/action'
import Sizebutton from './Sizebutton'

function ProductDetails() {
    const [data, setData]=React.useState({})
    const [loading, setLoading]=React.useState(true)
    let {id}=useParams();
    const dispatch = useDispatch()

    const getProductDetails=(id)=>{
        axios.get(`https://masai-project.herokuapp.com/product_data/${id}`)
        .then((res)=>{
           setData(res.data)
           setLoading(false)
       })
    }
    React.useEffect(()=>{
        getProductDetails(id)
    },[])
  
    // console.log(data)

    return (loading)?<>loading</>: (
        <div className={styles.Pmaindiv}>
            {/* <SubNavbar/> */}
          
           <div className={styles.Psubdiv} >
                <div className={styles.Pimagesubdiv} >
                    <Zoom>
                    <img className={styles.Pimg1} src={data.images[0]} alt="prod-img" width="500" />
                    </Zoom>
                  <Zoom> <img className={styles.Pimg1} src={data.images[1]}  /></Zoom>
                   
               </div>
               <div className={styles.Pimagesubdiv}>
                   <Zoom> <img className={styles.Pimg1} src={data.images[2]} alt="prod-img" width="500" /></Zoom>
                   <Zoom>  <img className={styles.Pimg1} src={data.images[3]} alt="prod-img" width="500" /></Zoom>
                  
                 
                </div> 
           </div>
           <div className={styles.Psubdiv1}>
                <p className={styles.Ptitle}>{data.title}</p>
                <p className={styles.Psubtitle}>{data.sub_heading}</p>
                <div>
                   <strong className={styles.Pprice}>₹{data.price}</strong>
                   <s className={styles.Pdiscount}>₹{data.dis_price}</s>
                   <strong className={styles.Poffer} >({data.discount}%OFF)</strong>
                   <p className={styles.Ptax}>inclusive of all taxes</p>
               </div>
               <h4 className={styles.Psize}>Select size</h4>
               <div className={styles.SizeDiv}>
                   {(data.sizes).map((el,j)=><Sizebutton key={j} el={el}></Sizebutton>)}
               </div>
               <div className={styles.buttondiv}>
                   <div onClick={()=>{dispatch(postBagData(data)); toast.success("Product added to Bag")}}  className={styles.PbuttonBag}> <img src="" alt="" />ADD TO BAG</div>
                   <div onClick={()=>{dispatch(postWishData(data));alert("Product added to Wishlist")}} className={styles.pWhishlist}><img src="" alt="" />WISHLIST</div>
               </div>
               <div className={styles.repeatmrp}>
               <strong className={styles.Pprice}>₹{data.price}</strong>
                   <s className={styles.Pdiscount}>₹{data.dis_price}</s>
                   <strong className={styles.Poffer} >({data.discount}%OFF)</strong>
               </div>
               {/* <div className={styles.delivery}>
                <p>100% Original Products</p>
                <p>Pay on delivery might be available</p>
                <p>Easy 30 days returns and exchanges</p>
                <p>Try & Buy might be available</p>
               </div> */}
               {/* <div className={styles.delivery}>
                <p>Applicable on: Orders above Rs.1699</p>
                <p>Coupon code: FORU300</p>
                <p>Expires in: 3 hours 40 minutes</p>
                <p>Coupon Discount: Rs. 300 off (check cart for final savings)</p>
               </div> */}
           </div>
          
         </div>
    )
}

export default ProductDetails
