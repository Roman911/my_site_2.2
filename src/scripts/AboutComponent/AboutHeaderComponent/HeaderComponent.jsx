import React, { Component } from 'react'
import {contentItem} from "./../About.config";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from "./HeaderStyle";

class HeaderComponent extends Component {
  render() {
    const header = contentItem.map((item, index) => {
      return <div key={index} className={css(styles.item)}>
        <h4 className={css(styles.header)}>{item.aboutMe[lang]}</h4>
        <p className={css(styles.text, styles.subtitle)}>{item.lovePhoto[lang]}</p>
        <p className={css(styles.text)}>{item.text[lang]}</p>
      </div>;
    });
    return <div>
      { header }
    </div>
  }
}

export { HeaderComponent };