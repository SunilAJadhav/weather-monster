import productsReducer from './reducer';
import * as types from '../constants/ActionTypes';

const initialState = {
    pending: false,
    products: [],
    error: null
}

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(productsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle success', () => {
    expect(
      productsReducer([], {
        type: types.FETCH_PRODUCTS_SUCCESS,
        products: 'sample response'
      })
    ).toEqual(
      {
        "pending": false,
        products: 'sample response',
      }
    )
  }) 
})