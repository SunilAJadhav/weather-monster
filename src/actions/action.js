export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProductsPending = () => {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export const fetchProductsSuccess = (list) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: list
    }
}

export const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}