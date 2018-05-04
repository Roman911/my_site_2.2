import React, { Component } from 'react';
import { photoStore } from "../stores/photo.store";
import { PhotoComponent } from "./PhotoComponent/PhotoComponent";
import { itemControl } from "../ControlWindow/control.config";
import { task } from "../ControlWindow/CategoriesComponent/Categories.config";
import { CategoriesComponent } from "../ControlWindow/CategoriesComponent/CategoriesComponent";
import { taskDate } from "../ControlWindow/CategoriesComponent/date.config";
import { DateComponent } from "../ControlWindow/CategoriesComponent/DateComponent";
import { tags } from "../ControlWindow/CategoriesComponent/tags.config";
import { TagsComponent } from "../ControlWindow/CategoriesComponent/TagsComponent";

import { css } from 'aphrodite/no-important';
import styles from './GalleryStyle';
import style from './../ControlWindow/CategoriesComponent/CategoriesStyle';
import grid from './../../styles/baseStyle';

class GalleryComponent extends Component {
  constructor() {
    super();
    this.state = {
      photo: [],
      showCategories: null,
      currentIndexCategories: null,
      showDate: false,
      currentIndexTag: null,
      tag: null,
      showedMob: false
    }
  }

  componentDidMount() {
    photoStore.subscribe('dataChanged', (photo) => {
      this.setState({ photo: photo })
    });
    photoStore.getList();
  }

  toggleCategories(name, index) {
    this.setState({tag: null, currentIndexTag: null});
    this.setState({showedMob: false});
    if (this.state.showCategories === name) {
      this.setState({showCategories: null, currentIndexCategories: null})
    } else {
      this.setState({showCategories: name, currentIndexCategories: index})
    }
    document.body.style.overflow = '';
  }

  toggleDate() {
    this.setState({showDate: !this.state.showDate});
    this.setState({showedMob: false});
    document.body.style.overflow = '';
  }

  toggleTag(name, index) {
    this.setState({showCategories: null, currentIndexCategories: null});
    this.setState({showedMob: false});
    if (this.state.tag === name) {
      this.setState({tag: null, currentIndexTag: null})
    } else {
      this.setState({tag: name, currentIndexTag: index})
    }
    document.body.style.overflow = '';
  }

  handleClick() {
    this.setState({showedMob: !this.state.showedMob});
    if (this.state.showedMob === true) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
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

    const headerTags = itemControl.map((item, index) => {
      return <div key={index} className={css(styles.windowHeader)}>
        <p className={css(styles.text)}>{ item.headerTag[lang] }</p>
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

    const tag = tags.map((item, index) => {
      return <div
        className={css(styles.tags)}
        key={index}
        onClick={() => this.toggleTag(item.tag, index)}
      >
        <TagsComponent
          name={item.name[lang]}
          show={this.state.currentIndexTag === index}
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

    const img3 = this.state.photo.filter((item) => {
      let img;
      if (item.tag === this.state.tag) {
        img = item
      }
      return img
    });

    let images;
    if (this.state.showCategories !== null) {
      images = img2
    } else if (this.state.tag !== null) {
      images = img3
    } else {
      images = this.state.photo
    }

    images = this.state.showDate ? images.reverse() : images;

    const matchMedia = window.matchMedia("(max-width: 768px)").matches;
    const contentWrapper = matchMedia ? styles.contentWrapperMob : styles.contentWrapper;
    const displayNone = matchMedia ? {display: 'block'} : {display: 'none'};
    const borderNone = matchMedia ? {border: 'none', boxShadow: 'none'} : {border: '1px solid #a0a0a0'};
    const textAlign = matchMedia ? {textAlign: 'center', boxShadow: 'none'} : {textAlign: 'start'};

    let showed = this.state.showedMob ? {transform: 'translateX(0)'} : {transform: 'translateX(-100%)'};
    let showed2 = matchMedia ? showed : {transform: 'translateX(0)'};

    return <section className={css(styles.gallery, grid.pageL)}>
      <div
        onClick={() => this.handleClick()}
        style={displayNone}
        className={css(styles.windowTaskMob)}
      >
        { header }
      </div>
      <div style={showed2} className={css(contentWrapper)}>
        <div style={borderNone} className={css(styles.windowTask)}>
          { header }
          <div style={textAlign} className={css(style.windowControl)}>
            { subtitleCategories }
            { checkbox }
          </div>
          <div style={textAlign} className={css(style.windowControl)}>
            { subtitleDate }
            { checkboxDate }
          </div>
        </div>
        <div style={borderNone} className={css(styles.windowTask)}>
          { headerTags }
          <div className={css(style.windowControlTag)}>
            { tag }
          </div>
        </div>
      </div>
      <PhotoComponent lang={lang} img={images} />
    </section>
  }
}

export { GalleryComponent };