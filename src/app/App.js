import React from "react";
import PropTypes from "prop-types";
import {Cart} from '../features/cart/Cart'
import { Inventory } from "../features/inventory/Inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.js";
// Import the Cart component here.

// Render the Cart component below <Inventory />
export const App = (props) => {
    // eslint-disable-next-line react/prop-types
    const { state, dispatch } = props;

    return (
        <div>
            <CurrencyFilter
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />

            <Inventory
                inventory={state.inventory}
                currencyFilter={state.currencyFilter}
                dispatch={dispatch}
            />

            <Cart cart={state.cart} currencyFilter={state.currencyFilter} dispatch={dispatch} />
        </div>  
    );
};

App.propTypes = {
    state: PropTypes.object,
    currencyFilter: PropTypes.string
};
