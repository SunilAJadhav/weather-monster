import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/action';
import { ALL_CITIES } from '../config';

function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch(ALL_CITIES , {accept: 'application/json'})
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.list));
            return res.list;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;