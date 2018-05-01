import React, { Component } from 'react'
import { headerItem } from "./header.config";

import { css } from 'aphrodite/no-important';
import styles from './ContactsStyle';
import style from './../../styles/baseStyle';
import grid from './../../styles/gridStyles'

class ContactsComponent extends Component{

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

    const header = headerItem.map((item, index) => {
      return <div key={index} className={css(styles.header)}>
        <h2 className={css(styles.headerText)}>{ item.header[lang] }</h2>
        <p className={css(styles.subtitle)}>{ item.subtitle[lang] }</p>
      </div>
    });

    let width;
    let width2;
    if (window.matchMedia("(max-width: 768px)").matches) {
      width = grid.width100;
      width2 = grid.width100
    } else if (window.matchMedia("(max-width: 992px)").matches) {
      width = grid.width50;
      width2 = grid.width50
    } else {
      width = grid.width33;
      width2 = grid.width66
    }

    return <section className={css(style.pageM, styles.contentWrapper)}>
      { header }
      <div className={css(grid.gridContainer)}>
        <div className={css(styles.fontSize, width)}>
          <img className={css(styles.img)} src='./assets/photo_17.jpg' alt=""/>
        </div>
        <div className={css(width2)}>
          <p>123</p>
        </div>
      </div>
    </section>
  }
}

export { ContactsComponent };