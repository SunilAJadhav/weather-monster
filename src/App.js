import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import CityWeatherView from './components/CityWeatherView';
import reducer from './reducer/reducer';

import './App.css';

const store = createStore( reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <CityWeatherView />
    </Provider>
   </React.Fragment>
  );
};

export default App;