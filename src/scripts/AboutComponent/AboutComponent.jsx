import React, { PureComponent } from 'react';
import { HeaderComponent } from "./AboutHeaderComponent/HeaderComponent";
import { MainComponent } from "./AboutMainComponent/MainComponent";
import { PropertiesComponent } from "./AboutPropertiesComponent/PropertiesComponent";
import { BarComponent } from "./AboutBarComponent/BarComponent";

import { css } from 'aphrodite/no-important';
import style from './../../styles/baseStyle';
import styles from './AboutStyle';

class AboutComponent extends PureComponent {

  render() {
    return <section id="navAbout">
      <div className={css(style.pageM, styles.pageWrapper)}>
        <HeaderComponent />
        <MainComponent />
        <PropertiesComponent />
      </div>
      <BarComponent />
    </section>
  }
}

export { AboutComponent };