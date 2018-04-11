import React, { Component } from 'react';
import {PhotoComponent} from "./PhotoComponent/PhotoComponent";

import { css } from 'aphrodite/no-important';
import styles from './GalleryStyle'

class GalleryComponent extends Component {

  render() {

    let lang;
    const languageBrowser = navigator.language;
    if (languageBrowser === 'uk-UA' || languageBrowser === 'uk') {
      lang = 0;
    } else if (languageBrowser === 'ru-RU' || languageBrowser === 'ru') {
      lang = 1;
    } else {
      lang = 2;
    }

    return <section className={css(styles.gallery)}>
      <PhotoComponent lang={lang} />
    </section>
  }
}

export { GalleryComponent };