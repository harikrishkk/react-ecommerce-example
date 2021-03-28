import React, { Component, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCurrencyToggle from "./hooks/useCurrencyToggle";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CurrencyContext from "./contexts/CurrencyContext";

// Initial load
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { loadAllDeals, searchProducts } from "./redux-state/actions";
import { connect } from "react-redux";
const Cart = lazy(() => import("./pages/Cart"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const FAQ = lazy(() => import("./pages/FAQ"));
const DealsDetails = lazy(() => import("./components/DealsDetails"));
const Booking = lazy(() => import("./components/Booking"));

const App = (props) => {
  const dispatch = useDispatch();
  const currencyContextObj = useCurrencyToggle();
  useEffect(() => {
    dispatch(loadAllDeals());
  }, []);
  return (
    <>
      <CurrencyContext.Provider value={currencyContextObj}>
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
};

export default App;
