import React, { Component } from 'react';
import { photoStore } from "../stores/photo.store";
import { PhotoComponent } from "./PhotoComponent/PhotoComponent";
import { itemControl } from "../ControlWindow/control.config";
import { task } from "../ControlWindow/CategoriesComponent/Categories.config";
import { CategoriesComponent } from "../ControlWindow/CategoriesComponent/CategoriesComponent";
import { taskDate } from "../ControlWindow/CategoriesComponent/date.config";


import { css } from 'aphrodite/no-important';
import styles from './GalleryStyle';
import style from './../ControlWindow/CategoriesComponent/CategoriesStyle';
import grid from './../../styles/baseStyle';
import {DateComponent} from "../ControlWindow/CategoriesComponent/DateComponent";

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      photo: [],
      showCategories: null,
      currentIndexCategories: null,
      showDate: false
    }
  }

  componentDidMount() {
    photoStore.subscribe('dataChanged', (photo) => {
      this.setState({ photo: photo })
    });
    photoStore.getList();
  }

  toggleCategories(name, index) {
    if (this.state.showCategories === name) {
      this.setState({showCategories: null, currentIndexCategories: null})
    } else {
      this.setState({showCategories: name, currentIndexCategories: index})
    }
  }

  toggleDate() {
    this.setState({showDate: !this.state.showDate})
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

    const subtitleCategories = itemControl.map((item, index) => {
      return <p key={index} className={css(style.subtitle)}>{ item.subtitle[lang] }</p>
    });

    const subtitleDate = itemControl.map((item, index) => {
      return <p key={index} className={css(style.subtitleDate)}>{ item.subtitleDate[lang] }</p>
    });

    const checkbox = task.map((item, index) => {
      return <div key={index} onChange={() => this.toggleCategories(item.name, index)} >
        < CategoriesComponent
          name={item.name}
          title={item.title[lang]}
          index={index}
          show={this.state.currentIndexCategories === index}
        />
      </div>
    });

    const checkboxDate = taskDate.map((item, index) => {
      return <div key={index} onChange={() => this.toggleDate()} >
        <DateComponent
          name={item.name}
          title={item.title[lang]}
          title2={item.title2[lang]}
          index={index}
          show={this.state.showDate}
        />
      </div>
    });

    const img2 = this.state.photo.filter((item) => {
      let img;
      if (item.category === this.state.showCategories) {
        img = item
      }
      return img
    });

    let images;
    if (this.state.showCategories === null) {
      images = this.state.photo
    } else {
      images = img2
    }

    images = this.state.showDate ? images.reverse() : images;

    return <section className={css(styles.gallery, grid.pageL)}>
      <div className={css(styles.contentWrapper)}>
        <div className={css(styles.windowTask)}>
          { header }
          <div className={css(style.windowControl)}>
            { subtitleCategories }
            { checkbox }
          </div>
          <div className={css(style.windowControl)}>
            { subtitleDate }
            { checkboxDate }
          </div>
        </div>
      </div>
      <PhotoComponent lang={lang} img={images} />
    </section>
  }
}

export { GalleryComponent };