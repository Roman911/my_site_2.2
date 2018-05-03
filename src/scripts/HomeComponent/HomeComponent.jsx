import React, { Component, Fragment } from 'react'
import {HeaderComponent} from "./HeaderComponent/HeaderComponent";
import {AboutComponent} from "../AboutComponent/AboutComponent";
import {InsertComponent} from "./InsertComponent/InsertComponent";
import {insertItem} from "./InsertComponent/insert.config";
import {PortfolioComponent} from "./PortfolioComponent/PortfolioComponent";
import {ContactsComponent} from "../ContactsComponent/ContactsComponent";

class HomeComponent extends Component {

  render() {

    let lang;
    const languageBrowser = navigator.language;
    if (languageBrowser === 'uk-UA' || languageBrowser === 'uk') {
      lang = 0;
    } else if (languageBrowser === 'ru-RU' || languageBrowser === 'ru') {
      lang = 1;
    } else {
      lang = 2;
    }

    let background;
    let background2;
    if (window.matchMedia("(max-width: 768px)").matches) {
      background = {backgroundImage: 'url("./assets/bg_portfolio_m.jpg")'};
      background2 = {backgroundImage: 'url("./assets/bg_contacts_m.jpg")'};
    } else {
      background = {backgroundImage: 'url("./assets/bg_portfolio.jpg")'};
      background2 = {backgroundImage: 'url("./assets/bg_contacts.jpg")'};
    }

    const insert = insertItem.map((item, index) => {
      return <InsertComponent key={index} name={item.name[lang]} background={background} />
    });

    const insert2 = insertItem.map((item, index) => {
      return <InsertComponent key={index} name={item.name2[lang]} background={background2} />
    });

    return <Fragment>
      <HeaderComponent />
      <AboutComponent />
      { insert }
      <PortfolioComponent lang={lang} />
      { insert2 }
      <ContactsComponent />
    </Fragment>
  }
}

export { HomeComponent };