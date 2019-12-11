import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from './fetchProducts';
import {getProductsError, getProducts, getProductsPending} from '../reducer/reducer';

class ProductView extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = { 
          cityToSearch: ''
        }
    }

    componentDidMount() {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    
  handleCityChange = (event) => {
    this.setState({cityToSearch: event.target.value});
  }

  renderCityListDropdown = () => {
    const lists = this.props.products;
    
    const dropDownList = lists && lists.map((list, index) => (
        <option key={`list`+index} value={list.name} />
      ));
      return dropDownList;
  }

    render() {
        const {products, error} = this.props;

        let cityList = products;

        /* ideally this should be done with dispatching the change to redux store and getting filtered
            list but due to time contriaints I am doing this filtering on view itself. Sometimes adding each action to
            redux store gets complicated for smaller applications
         */
        if (this.state.cityToSearch) {
          cityList = cityList.filter(city =>
            city.name.toLowerCase().match( this.state.cityToSearch.toLowerCase() )
          );
        };
    
        if(cityList && cityList.length > 1){
          cityList.sort((a, b) =>(b.main.temp_max - a.main.temp_max));
        }

        return (
            <div className='container'>
              <h1>Weather Monster</h1>
            {cityList.length === 0 && !error && <div>Loading...</div>}
                {error && <span className='product-list-error'>{error}</span>}

                <div className='input-container'>
                <input 
                  type='text'
                  name='name'
                  id='cityNameInput'
                  list='cityNamesList'
                  className='input-control'
                  placeholder={"Enter Name Of New City."}
                  onChange= {(event)=>{this.handleCityChange(event)}}
                />
                <datalist id='cityNamesList'>
                  {this.renderCityListDropdown()}
                  </datalist>
              </div>
                <div className='grid'>
                  {
                    cityList && cityList.map((list, index) => (
                      <div className='city-container' key={index}>
                          <h2>{list.name}</h2>
                        <p>Min : { list.main.temp_min } &#8451; </p>
                        <p>Max: { list.main.temp_max }  &#8451;</p>
                     </div>
                      ))
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
  return({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
});
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);