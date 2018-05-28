import React, { PureComponent, Fragment } from 'react';
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import AboutComponent from "../AboutComponent/AboutComponent";
import InsertComponent from "./InsertComponent/InsertComponent";
import { namePortfolio, nameContacts } from './Home.variables';
import PortfolioComponent from "./PortfolioComponent/PortfolioComponent";
import ContactsComponent from "../ContactsComponent/ContactsComponent";

import { lang } from "../log/lang";

export default class HomeComponent extends PureComponent {

  render() {

    let background;
    let background2;
    if (window.matchMedia("(max-width: 768px)").matches) {
      background = {backgroundImage: 'url("./assets/bg_portfolio_m.jpg")'};
      background2 = {backgroundImage: 'url("./assets/bg_contacts_m.jpg")'};
    } else {
      background = {backgroundImage: 'url("./assets/bg_portfolio.jpg")'};
      background2 = {backgroundImage: 'url("./assets/bg_contacts.jpg")'};
    }

    return <Fragment>
      <HeaderComponent />
      <AboutComponent />
      <InsertComponent
        name={namePortfolio[lang]}
        background={background}
      />
      <PortfolioComponent />
      <InsertComponent
        name={nameContacts[lang]}
        background={background2}
      />
      <ContactsComponent />
    </Fragment>
  }
}