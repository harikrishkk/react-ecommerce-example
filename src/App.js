import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CurrencyContext from './contexts/CurrencyContext';
import DealsContext from './contexts/DealsContext';
import withDeals from './hoc/withDeals';

// Initial load
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { loadAllDeals } from './redux-state/actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadAllDeals();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.products);
  }
  render() {
    return (
      <div>
        <h1> Hello </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.deals.deals,
  };
};

export default connect(mapStateToProps, { loadAllDeals })(App);
