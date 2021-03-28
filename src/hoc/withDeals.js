import React from 'react';
import axios from '../api/axios';

const withDeals = (Component) => {
  return class WithDeals extends React.Component {
    state = {
      products: [],
      filterVal: '',
      loading: false,
    };
    handleSearch = (val) => {
      this.setState({ filterVal: val });
    };
    componentDidMount() {
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
      const newProps = {
        products: this.state.products,
        filterVal: this.state.filterVal,
        loading: this.state.loading,
      };
      return <Component {...newProps} {...this.props} />;
    }
  };
};

export default withDeals;
