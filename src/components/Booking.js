import React, { Component } from 'react';
import Container from './layouts/Container';
import queryString from 'query-string';

export default class Booking extends Component {
  render() {
    const { name, dateTime } = queryString.parse(this.props.location.search);
    return (
      <Container>
        <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
          <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
            Your booking details
          </h1>
          <div className="pa3 bt b--black-10">
            <p className="f6 f5-ns lh-copy measure">Thank you {name} !</p>
            <p className="f6 f5-ns lh-copy measure">
              Your appoinment has been booked on {dateTime}. See ya 👋 !
            </p>
          </div>
        </article>
      </Container>
    );
  }
}
