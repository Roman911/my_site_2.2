import React, { Fragment } from 'react';
import { headHeader, subtitleHeader, textHeader } from './../../Gallery.variables';

import { lang } from "../../../log/lang";

import {css} from "aphrodite/no-important";
import styles from "../PhotoStyle";

export default function HeaderPhotoComponent() {

  return <Fragment>
    <h3 className={css(styles.header)}>{ headHeader[lang] }</h3>
    <p className={css(styles.text, styles.marginTop)}>{ subtitleHeader[lang] }</p>
    <p className={css(styles.text, styles.marginBottom)}>{ textHeader[lang] }</p>
  </Fragment>
}