import React, { Component } from 'react'
import { headerItem } from "./header.config";
import { FormComponent } from "./FormComponent/FormComponent";
import { LinksComponent } from "./LinksComponent/LinksComponent";

import { lang } from "../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './ContactsStyle';
import style from './../../styles/baseStyle';
import grid from './../../styles/gridStyles'

class ContactsComponent extends Component{

  render() {

    const header = headerItem.map((item, index) => {
      return <div key={index} className={css(styles.header)}>
        <h2 className={css(styles.headerText)}>{ item.header[lang] }</h2>
        <p className={css(styles.subtitle)}>{ item.subtitle[lang] }</p>
      </div>
    });

    let width;
    let width2;
    let width3;
    if (window.matchMedia("(max-width: 768px)").matches) {
      width = grid.width100;
      width2 = grid.width100;
      width3 = grid.width100
    } else if (window.matchMedia("(max-width: 992px)").matches) {
      width = grid.width50;
      width2 = grid.width50;
      width3 = grid.width100;
    } else {
      width = grid.width33;
      width2 = grid.width66;
      width3 = grid.width50
    }

    const border = this.props.border ? styles.border : '';

    return <section className={css(style.pageM, styles.contentWrapper)}>
      <div className={css(border)}>
        { header }
        <div className={css(grid.gridContainer)}>
          <div className={css(styles.fontSize, width)}>
            <img className={css(styles.img)} src='./assets/photo_17.jpg' alt=""/>
          </div>
          <div className={css(width2)}>
            <div className={css(grid.gridContainer, styles.item)}>
              <FormComponent width={width3} lang={lang} />
              <LinksComponent width={width3} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}

export { ContactsComponent };