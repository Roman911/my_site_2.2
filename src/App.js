import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { NavBarComponent } from "./scripts/navBarComponent/navBarComponent";
import { Footer } from "./scripts/FooterComponent/FooterComponent";
import { HomeComponent } from "./scripts/HomeComponent/HomeComponent";
import { GalleryComponent } from "./scripts/GalleryComponent/GalleryComponent";
import { AboutComponent } from "./scripts/AboutComponent/AboutComponent"
import { ContactsComponent } from "./scripts/ContactsComponent/ContactsComponent";

import { css } from 'aphrodite/no-important';
import styles from './styles/baseStyle';
import {ScrollToTop} from "./scripts/ScrollToTop/ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={css(styles.pageWrapper)}>
          <NavBarComponent height='300' />
          <Switch>
            <Route path='/home' render={() => <HomeComponent/>}/>
            <Route path='/gallery' render={() => <GalleryComponent/>}/>
            <Route path='/about' render={() => <AboutComponent/>}/>
            <Route path='/contacts' render={() => <ContactsComponent border={true}/>}/>
            <Redirect path='/' to='/home'/>
          </Switch>
          <Footer />
          <ScrollToTop height='700' scrollStepInPx="50" delayInMs="16.66" />
        </div>
      </Router>
    );
  }
}

export default App;
