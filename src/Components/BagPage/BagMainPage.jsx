import React from 'react';
import ShoppingBag from "./ShoppingBag";
import { useSelector } from 'react-redux';
import {  Navigate} from 'react-router';

const BagMainPage = () => {

        return (
        <div>
            <ShoppingBag />
        </div>
    )
};

export default BagMainPage;