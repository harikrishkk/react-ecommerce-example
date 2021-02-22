import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import DealsDetails from './components/DealsDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/products/:id" component={DealsDetails} />
        <Footer />
      </BrowserRouter>
    );
  }
}
