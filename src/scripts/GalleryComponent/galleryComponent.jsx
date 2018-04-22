import React, { Component } from 'react';
import { photoStore } from "../stores/photo.store";
import { PhotoComponent } from "./PhotoComponent/PhotoComponent";
import { itemControl } from "../ControlWindow/control.config";
import {task} from "../ControlWindow/CategoriesComponent/Categories.config";
import {CategoriesComponent} from "../ControlWindow/CategoriesComponent/CategoriesComponent";

import { css } from 'aphrodite/no-important';
import styles from './GalleryStyle';
import style from './../ControlWindow/CategoriesComponent/CategoriesStyle';
import grid from './../../styles/baseStyle';

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      photo: []
    }
  }

  componentDidMount() {
    photoStore.subscribe('dataChanged', (photo) => {
      this.setState({ photo: photo })
    });
    photoStore.getList();
  }

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

    const header = itemControl.map((item, index) => {
      return <div key={index} className={css(styles.windowHeader)}>
        <p className={css(styles.text)}>{ item.header[lang] }</p>
      </div>
    });

    const subtitle = itemControl.map((item, index) => {
      return <p key={index} className={css(style.subtitle)}>{ item.subtitle[lang] }</p>
    });

    const checkbox = task.map((item, index) => {
      return <div key={index} onChange={() => this.toggle(index)} >
        < CategoriesComponent name={item.name} index={index} />
      </div>
    });

    return <section className={css(styles.gallery, grid.pageL)}>
      <div className={css(styles.contentWrapper)}>
        <div className={css(styles.windowTask)}>
          { header }
          <div className={css(style.windowControl)}>
            { subtitle }
            { checkbox }
          </div>
        </div>
      </div>
      <PhotoComponent lang={lang} />
    </section>
  }
}

export { GalleryComponent };