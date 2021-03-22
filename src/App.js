import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CurrencyContext from './contexts/CurrencyContext';

// Initial load
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { loadAllDeals, searchProducts } from './redux-state/actions';
import { connect } from 'react-redux';
// import Cart from './pages/Cart';
const Cart = lazy(() => import('./pages/Cart'));

// import ContactUs from './pages/ContactUs';
const ContactUs = lazy(() => import('./pages/ContactUs'));

// import FAQ from './pages/FAQ';

const FAQ = lazy(() => import('./pages/FAQ'));

// import DealsDetails from './components/DealsDetails';
const DealsDetails = lazy(() => import('./components/DealsDetails'));

// import Booking from './components/Booking';
const Booking = lazy(() => import('./components/Booking'));

class App extends Component {
  state = {
    currency: 'INR',
    toggleCurrency: () => {
      this.setState(({ currency }) => ({
        currency: currency === 'CAD' ? 'INR' : 'CAD',
      }));
    },
  };

  componentDidMount() {
    this.props.loadAllDeals();
  }
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <>
        <CurrencyContext.Provider value={this.state}>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route
                path="/cart"
                render={(props) => (
                  <Suspense fallback={<h3> Loading..</h3>}>
                    <Cart {...props} />
                  </Suspense>
                )}
              />
              <Route
                path="/faq"
                render={(props) => (
                  <Suspense fallback={<h3> Loading..</h3>}>
                    <FAQ {...props} />
                  </Suspense>
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Suspense fallback={<h3> Loading..</h3>}>
                    <ContactUs {...props} />
                  </Suspense>
                )}
              />
              <Route
                path="/booking"
                render={(props) => (
                  <Suspense fallback={<h3> Loading..</h3>}>
                    <Booking {...props} />
                  </Suspense>
                )}
              />
              <Route
                path="/products/:id"
                render={(props) => (
                  <Suspense fallback={<h3> Loading..</h3>}>
                    <DealsDetails {...props} />
                  </Suspense>
                )}
              />

              <Route path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </CurrencyContext.Provider>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.deals.deals,
    error: state.deals.error,
  };
};

export default connect(mapStateToProps, { loadAllDeals, searchProducts })(App);
