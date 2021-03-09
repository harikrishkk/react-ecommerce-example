import React, { Component } from 'react';
import Container from '../components/layouts/Container';

import Email from '../components/tabs/Email';
import Mobile from '../components/tabs/Mobile';
import Office from '../components/tabs/Office';
import Appointment from '../components/tabs/Appointment';
import { NavLink, Route } from 'react-router-dom';
export default class ContactUs extends Component {
  state = {
    isOpen: false,
  };

  onToggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { match } = this.props;
    return (
      <Container>
        <div className="tc">
          <NavLink
            to={`${match.url}/mobile`}
            activeClassName="ba white bg-black"
            className="f6 link ba ph3 pv2 mb2 dib black pointer mr2"
          >
            Mobile
          </NavLink>
          <NavLink
            to={`${match.url}/email`}
            activeClassName="ba white bg-black"
            className="f6 link ba ph3 pv2 mb2 dib black pointer mr2"
          >
            Email
          </NavLink>
          <NavLink
            to={`${match.url}/office`}
            activeClassName="ba white bg-black"
            className="f6 link ba ph3 pv2 mb2 dib black pointer mr2"
          >
            Our offices
          </NavLink>
          <NavLink
            to={`${match.url}/appointment`}
            activeClassName="ba white bg-black"
            className="f6 link ba ph3 pv2 mb2 dib black pointer"
          >
            Appointment
          </NavLink>
        </div>
        <Route
          exact
          path={match.url}
          render={() => {
            return (
              <div className="tc">
                <h1 className="f6 lh-copy">Select a method to contact us </h1>
              </div>
            );
          }}
        />
        <Route path="/contact/mobile" component={Mobile} />
        <Route path="/contact/email" component={Email} />
        <Route path="/contact/office" component={Office} />
        <Route path="/contact/appointment" component={Appointment} />
      </Container>
    );
  }
}
