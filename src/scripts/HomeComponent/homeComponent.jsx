import React, { Component } from 'react'
import {HeaderComponent} from "./HeaderComponent/HeaderComponent";
import {AboutComponent} from "../AboutComponent/AboutComponent";
import {InsertComponent} from "./InsertComponent/InsertComponent";
import {insertItem} from "./InsertComponent/insert.config";

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
      background = {backgroundImage: 'url("./bg_portfolio_m.jpg")'};
      background2 = {backgroundImage: 'url("./photo_m_002.jpg")'};
    } else {
      background = {backgroundImage: 'url("./bg_portfolio.jpg")'};
      background2 = {backgroundImage: 'url("./photo_002.jpg")'};
    }

    const insert = insertItem.map((item, index) => {
      return <InsertComponent key={index} name={item.name[lang]} background={background} />
    });

    const insert2 = insertItem.map((item, index) => {
      return <InsertComponent key={index} name={item.name2[lang]} background={background2} />
    });

    return <div>
      <HeaderComponent />
      <AboutComponent />
      { insert }
      { insert2 }
    </div>
  }
}

export { HomeComponent };