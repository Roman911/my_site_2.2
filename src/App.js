import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { NavBarComponent } from "./scripts/navBarComponent/navBarComponent";
import { HomeComponent } from "./scripts/HomeComponent/homeComponent";
import { GalleryComponent } from "./scripts/GalleryComponent/GalleryComponent";
import {AboutComponent} from "./scripts/AboutComponent/AboutComponent";

import './App.css';

import { css } from 'aphrodite/no-important';
import styles from './styles/baseStyle';
import {Footer} from "./scripts/FooterComponent/FooterComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={css(styles.pageWrapper)}>
          <NavBarComponent />
          <Switch>
            <Route path='/home' render={() => <HomeComponent/>}/>
            <Route path='/gallery' render={() => <GalleryComponent/>}/>
            <Route path='/about' render={() => <AboutComponent/>}/>
            <Redirect path='/' to='/home'/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
