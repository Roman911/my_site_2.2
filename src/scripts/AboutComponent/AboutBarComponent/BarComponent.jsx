import React, { Component } from 'react';
import { barItem } from "./bar.config";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './BarStyle';

class BarComponent extends Component {
  render() {
    const item = barItem.map((item, index) => {
      return <div key={index} className={css(styles.item)}>
        <h3 className={css(styles.text, styles.subtitle)}>{ item.subtitle }</h3>
        <p className={css(styles.text)}>{ item.text[lang] }</p>
      </div>
    });
    return <section className={css(styles.bar)}>
      { item }
    </section>
  }
}

export { BarComponent };