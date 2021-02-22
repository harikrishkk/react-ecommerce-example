import React, { Component } from 'react';

import Container from './layouts/Container';
import Card from './Card';
import Rating from './Rating';
import SearchBar from './SearchBar';
import Loader from './Loader';
import axios from '../api/axios';
import { withRouter } from 'react-router-dom';

class Deals extends Component {
  state = {
    products: [],
    filterVal: '',
    loading: false,
  };
  handleSearch = (val) => {
    this.setState({ filterVal: val });
  };

  componentDidMount() {
    console.log('DEALS ====>', this.props);
    this.setState({
      loading: true,
    });
    axios.get('/deals.json').then((res) => {
      const products = [];
      Object.keys(res.data).forEach((key) => {
        const prod = {
          ...res.data[key],
          id: key,
        };
        products.push(prod);
      });

      this.setState({
        products,
        loading: false,
      });
    });
  }

  render() {
    const { products, filterVal } = this.state;
    const filteredProducts = products.filter((item) => {
      return item.name.toLowerCase().includes(filterVal.toLowerCase());
    });
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <div>
        <header className="tc ph4">
          <h1 className=" ttu f3 black-90 mv3">Deal of the day</h1>
        </header>
        <Container>
          <SearchBar onSearch={this.handleSearch} />
          <section className="flex flex-wrap">
            {filteredProducts.map((product) => {
              const { id, rating } = product;
              return (
                <Card key={id} data={product}>
                  <Rating rating={rating} />
                </Card>
              );
            })}
          </section>
        </Container>
      </div>
    );
  }
}

export default withRouter(Deals);
