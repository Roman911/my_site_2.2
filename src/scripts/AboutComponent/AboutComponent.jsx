import React, { Component } from 'react';
import {HeaderComponent} from "./AboutHeaderComponent/HeaderComponent";
import {MainComponent} from "./AboutMainComponent/MainComponent";
import {PropertiesComponent} from "./AboutPropertiesComponent/PropertiesComponent";
import {BarComponent} from "./AboutBarComponent/BarComponent";

import { css } from 'aphrodite/no-important';
import style from './../../styles/baseStyle';

class AboutComponent extends Component {

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

    return <section id="navAbout">
      <div className={css(style.pageM)}>
        <HeaderComponent lang={lang} />
        <MainComponent lang={lang} />
        <PropertiesComponent lang={lang} />
      </div>
      <BarComponent lang={lang} />
    </section>
  }
}

export { AboutComponent };