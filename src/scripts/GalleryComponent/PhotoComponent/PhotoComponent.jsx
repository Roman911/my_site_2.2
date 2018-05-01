import React, { Component } from 'react';
import { HeaderPhotoComponent } from "./HeaderPhotoComponent/HeaderPhotoComponent";
import { ShowPhotoComponent } from "./ShowPhotoComponent";

import { css } from 'aphrodite/no-important';
import styles from './PhotoStyle';
import style from './../../../styles/baseStyle'

class PhotoComponent extends Component {

  render() {
    return <div className={css(style.pageM)}>
      <div className={css(styles.contentWrapper)}>
        <HeaderPhotoComponent lang={this.props.lang} />
        <ShowPhotoComponent img={this.props.img} lang={this.props.lang} />
      </div>
    </div>
  }
}

export { PhotoComponent };