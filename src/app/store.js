// Import createStore and combineReducers here.
import {createStore, combineReducers} from "redux";
import {cartReducer} from '../features/cart/cartSlice.js';
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice.js';
import {inventoryReducer} from '../features/inventory/inventorySlice.js';
// import {searchTermReducer} from '../features/searchTerm/searchTermSlice.js';
// Import the slice reducers here.

// Create and export the store here.
export const store = createStore(combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
}));

