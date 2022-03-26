import React from 'react';
import styles from "./bag.module.css"
import BagProducts from "./BagProducts";
import AddMoreFromWish from "./AddMoreFromWish";


const ShoppingBag = () => {
    return (
        <>
 <div className={styles.horPartition}>
            <div></div>
            <div className={styles.borderRight}>
                <BagProducts />
                <AddMoreFromWish />
            </div>
        </div>
        </>
    );
};

export default ShoppingBag; 