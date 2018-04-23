import React, { Component, Fragment } from 'react';
import {ShowPhotoComponent} from "./ShowPhotoComponent";

import { css } from 'aphrodite/no-important';
import styles from './PhotoStyle';
import style from './../../../styles/baseStyle'
import {photoItem} from "./photo.config";

class PhotoComponent extends Component {

  render() {

    const header = photoItem.map((item, index) => {
      return <Fragment key={index}>
        <h3 className={css(styles.header)}>{ item.header[this.props.lang] }</h3>
        <p className={css(styles.text, styles.marginTop)}>{ item.subtitle[this.props.lang] }</p>
        <p className={css(styles.text, styles.marginBottom)}>{ item.text[this.props.lang] }</p>
      </Fragment>
    });

    return <div className={css(style.pageM)}>
      <div className={css(styles.contentWrapper)}>
        { header }
        <ShowPhotoComponent img={this.props.img} />
      </div>
    </div>
  }
}

export { PhotoComponent };