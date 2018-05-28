import React, { PureComponent } from 'react';
import { header, subtitle } from './Contacts.variables';
import FormComponent from "./FormComponent/FormComponent";
import LinksComponent from "./LinksComponent/LinksComponent";
import img from './../../assets/photo_17.jpg'

import { lang } from "../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './ContactsStyle';
import style from './../../styles/baseStyle';
import grid from './../../styles/gridStyles';

export default class ContactsComponent extends PureComponent {

  render() {

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

    const border = this.props.border ? styles.border : styles.borderNone;

    return <section className={css(style.pageM, styles.contentWrapper)}>
      <div className={css(border)}>
        <div className={css(styles.header)}>
          <h2 className={css(styles.headerText)}>{ header[lang] }</h2>
          <p className={css(styles.subtitle)}>{ subtitle[lang] }</p>
        </div>
        <div className={css(grid.gridContainer)}>
          <div className={css(styles.fontSize, width)}>
            <img className={css(styles.img)} src={ img } alt=""/>
          </div>
          <div className={css(width2)}>
            <div className={css(grid.gridContainer, styles.item)}>
              <FormComponent width={width3} lang={lang} />
              <LinksComponent width={width3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}