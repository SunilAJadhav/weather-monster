import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/action';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should return fetchProductsSuccess for all weather products for all cities', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.FETCH_PRODUCTS_SUCCESS,
      products: text
    }
    expect(fetchProductsSuccess(text)).toEqual(expectedAction)
  })

  it('should return fetchProductsPending for all weather products for all cities', () => {

    const expectedAction = {
      type: types.FETCH_PRODUCTS_PENDING
    }
    expect(fetchProductsPending()).toEqual(expectedAction)
  })

  it('should return fetchProductsError for all weather products for all cities', () => {
    const error = 'error';
    const expectedAction = {
      type: types.FETCH_PRODUCTS_ERROR,
      error: error
    }
    expect(fetchProductsError(error)).toEqual(expectedAction)
  })
})