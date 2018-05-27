import React from 'react';
import HeaderPhotoComponent from "./HeaderPhotoComponent/HeaderPhotoComponent";
import ShowPhotoComponent from "./ShowPhotoComponent";

import { css } from 'aphrodite/no-important';
import styles from './PhotoStyle';
import style from './../../../styles/baseStyle'

export default function PhotoComponent({img}) {

  return <div className={css(style.pageM)}>
    <div className={css(styles.contentWrapper)}>
      <HeaderPhotoComponent />
      <ShowPhotoComponent img={img} />
    </div>
  </div>
}