import React, { Component, Fragment } from 'react';
import { photoItem } from "../photo.config";

import { lang } from "../../../log/lang";

import {css} from "aphrodite/no-important";
import styles from "../PhotoStyle";

class HeaderPhotoComponent extends Component {

  render() {

    const header = photoItem.map((item, index) => {
      return <Fragment key={index}>
        <h3 className={css(styles.header)}>{ item.header[lang] }</h3>
        <p className={css(styles.text, styles.marginTop)}>{ item.subtitle[lang] }</p>
        <p className={css(styles.text, styles.marginBottom)}>{ item.text[lang] }</p>
      </Fragment>
    });

    return <Fragment>
      { header }
    </Fragment>
  }
}

export { HeaderPhotoComponent };