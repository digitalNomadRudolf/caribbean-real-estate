import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import SingleProperty from './components/SingleProperty';
import PropertyListing from './pages/PropertyListing';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './scss/styles.scss';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/properties" component={PropertyListing} />
          <Route exact path="/properties/:slug" component={SingleProperty} />
          <Route component={NotFound} />
        </Switch>
      </div>
        <Footer />
      </>
    )
  }
}
