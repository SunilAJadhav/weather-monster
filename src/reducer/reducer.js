import * as types from '../constants/ActionTypes';

const initialState = {
    pending: false,
    products: [],
    error: null
}

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            }
        case types.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;