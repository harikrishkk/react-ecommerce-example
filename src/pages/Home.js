import React, { Component } from 'react';
import Banner from '../components/Banner';
import Deals from '../components/Deals';

export default class Home extends Component {
  render() {
    console.log('HOME ====>', this.props);
    return (
      <div>
        <Banner />
        <Deals />
      </div>
    );
  }
}
