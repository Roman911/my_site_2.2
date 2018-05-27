import React, { Component } from 'react';
import { linksItem } from "./links.config";

import { css } from 'aphrodite/no-important';
import styles from './LinksStyle'

export default class LinksComponent extends Component {

  render() {

    const lang = this.props.lang;

    const header = linksItem.map((item, index) => {
      return <div key={index} className={css(styles.header)}>
        <p className={css(styles.text)}>{ item.header[lang] }</p>
      </div>
    });

    return <div className={css(this.props.width, styles.item)}>
      { header }
      <p className={css(styles.links)}>
        <span className={css(styles.span)}>
          <i className='fas fa-phone'/>
        </span>
        <span className={css(styles.span)}>
          <i className='fab fa-telegram-plane'/>
        </span>
        <span className={css(styles.span)}>
          <i className='fab fa-viber'/>
        </span>
        +38(096)7594520
      </p>
      <p className={css(styles.links)}>
        <span className={css(styles.span)}>
          <i className='fas fa-envelope'/>
        </span>
        roma-lysyk@ukr.net
      </p>
      <p className={css(styles.links)}>
        <span className={css(styles.span)}>
          <i className='fab fa-facebook-square'/>
        </span>
        <a className={css(styles.hover)} href="https://www.facebook.com/romalysyk" target="__blank">
          facebook.com/romalysyk
        </a>
      </p>
      <p className={css(styles.links)}>
        <span className={css(styles.span)}>
          <i className='fab fa-instagram'/>
        </span>
        <a className={css(styles.hover)} href="https://www.instagram.com/romanlysyk" target="__blank">
          instagram.com/romanlysyk
        </a>
      </p>
      <p className={css(styles.links)}>
        <span className={css(styles.span)}>
          <i className='fab fa-twitter-square'/>
        </span>
        <a className={css(styles.hover)} href="https://twitter.com/roma_lysyk" target="__blank">
          twitter.com/roma_lysyk
        </a>
      </p>
      <p className={css(styles.links)}>
        <span className={css(styles.span)}>
          <i className='fab fa-google-plus-square'/>
        </span>
        <a className={css(styles.hover)} href="https://plus.google.com/u/0/110130571380761850863" target="__blank">
          plus.google.com
        </a>
      </p>
      <p className={css(styles.links)}>
        <span className={css(styles.span)}>
          <i className='fas fa-camera'/>
        </span>
        <a className={css(styles.hover)} href="https://photographers.ua/RomanLisik/" target="__blank">
          photographers.ua/RomanLisik
        </a>
      </p>
    </div>
  }
}