import React, { Component } from 'react';
import {photoItem} from "./photo.config";

import { css } from 'aphrodite/no-important';
import styles from './PhotoStyle';
import style from './../../../styles/baseStyle'

class PhotoComponent extends Component {
  render() {

    const header = photoItem.map((item, index) => {
      return <div key={index} className={css(styles.contentWrapper)}>
        <h3>{ item.header[this.props.lang] }</h3>
        <p>{ item.subtitle[this.props.lang] }</p>
        <p>{ item.text[this.props.lang] }</p>
      </div>
    });
    return <div className={css(style.pageM)}>
      { header }
    </div>
  }
}

export { PhotoComponent };