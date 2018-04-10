import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import style from './../../styles/baseStyle';
import {HeaderComponent} from "./AboutHeaderComponent/HeaderComponent";
import {MainComponent} from "./AboutMainComponent/MainComponent";
import {PropertiesComponent} from "./AboutPropertiesComponent/PropertiesComponent";

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

    return <section className={css(style.pageM)} id="navAbout">
      <HeaderComponent lang={lang} />
      <MainComponent lang={lang} />
      <PropertiesComponent lang={lang} />
    </section>
  }
}

export { AboutComponent };