import React, { Component } from 'react';
import { footerItem } from './footer.config'
import {FooterLinks} from "./FooterLinks";

import { css } from 'aphrodite/no-important';
import styles from './FoterStyle'

class Footer extends Component {
  render() {
    let date = new Date();
    let year = date.getFullYear();
    const link = footerItem.map((item, index) => {
      return <FooterLinks key={index} href={item.href} target={item.target} class={item.class}/>;
    });
    return <footer className={css(styles.footer)}>
      <div className={css(styles.contentWrapper)}>
        <div className={css(styles.item)}>
          { link }
        </div>
        <div className={css(styles.date)}>
          <p className={css(styles.text)}>Roman-Lysyk © 2012-{ year }. All rights reserved.</p>
        </div>
      </div>
    </footer>
  }
}

export { Footer };