import React, { Component } from 'react';
import {photoItem} from "./photo.config";
import {ShowPhotoComponent} from "./ShowPhotoComponent";

import { css } from 'aphrodite/no-important';
import styles from './PhotoStyle';
import style from './../../../styles/baseStyle'

class PhotoComponent extends Component {
  render() {

    const header = photoItem.map((item, index) => {
      return <div key={index}>
        <h3 className={css(styles.header)}>{ item.header[this.props.lang] }</h3>
        <p className={css(styles.text, styles.marginTop)}>{ item.subtitle[this.props.lang] }</p>
        <p className={css(styles.text, styles.marginBottom)}>{ item.text[this.props.lang] }</p>
      </div>
    });
    return <div className={css(style.pageM)}>
      <div className={css(styles.contentWrapper)}>
        { header }
        <ShowPhotoComponent />
      </div>
    </div>
  }
}

export { PhotoComponent };