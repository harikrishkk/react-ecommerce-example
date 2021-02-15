import React, { Component } from 'react';
import { productData } from '../data/products';
import Container from './layouts/Container';
import Card from './Card';
import Rating from './Rating';
import SearchBar from './SearchBar';

export default class Deals extends Component {
  state = {
    products: productData,
  };
  render() {
    return (
      <div>
        <header className="tc ph4">
          <h1 className=" ttu f3 black-90 mv3">Deal of the day</h1>
        </header>
        <Container>
          <SearchBar />
          <section className="flex flex-wrap">
            {this.state.products.map((product) => {
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
