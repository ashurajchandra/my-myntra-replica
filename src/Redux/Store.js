import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import { productsReducer } from "./ProductListing/reducer"
import { wishlistReducer } from "./Wishlist/reducer"
import { bagReducer } from "./Bag/reducer"


const rootreducer = combineReducers({
    products:productsReducer,
    wishlist:wishlistReducer,
    bag:bagReducer,

})

const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk)
    ))

export default store;