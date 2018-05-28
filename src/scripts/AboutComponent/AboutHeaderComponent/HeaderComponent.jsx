import React from 'react'
import { aboutMe, lovePhoto, text } from "./../About.variables";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from "./HeaderStyle";

export default function HeaderComponent() {
  return <div className={css(styles.item)}>
    <h4 className={css(styles.header)}>{aboutMe[lang]}</h4>
    <p className={css(styles.text, styles.subtitle)}>{lovePhoto[lang]}</p>
    <p className={css(styles.text)}>{text[lang]}</p>
  </div>
}