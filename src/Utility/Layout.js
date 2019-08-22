import React, { Component } from 'react';

import styled from 'styled-components';

import { Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default class Layout extends Component {
  render() {
    return(
      <div>
        <Header />
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
        <Footer />
      </div>
    );
  }
}