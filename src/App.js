import React, { Component } from 'react';
import Banner from './components/Banner';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Deals />
        <Footer />
      </div>
    );
  }
}
