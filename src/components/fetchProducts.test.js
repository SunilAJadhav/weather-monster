import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/action';
import * as types from '../constants/ActionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { ALL_CITIES } from '../config';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce(ALL_CITIES, {accept: 'application/json'})

    const expectedActions = [
      { type: types.FETCH_PRODUCTS_PENDING },
      { type: types.FETCH_PRODUCTS_SUCCESS, body: { products: ['do something'] } }
    ]
    const store = mockStore({ products: [] })

    const list = 'list';

    return store.dispatch(fetchProductsSuccess(list)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})