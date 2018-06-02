import React, { Component } from 'react';
import { photoStore } from "../stores/photo.store";
import PhotoComponent from "./PhotoComponent/PhotoComponent";
import { head, subtitle, subtitleDate, headerTag } from './Gallery.variables';
import { task } from "../ControlWindow/CategoriesComponent/Categories.config";
import CategoriesComponent from "../ControlWindow/CategoriesComponent/CategoriesComponent";
import { taskDate } from "../ControlWindow/CategoriesComponent/date.config";
import DateComponent from "../ControlWindow/CategoriesComponent/DateComponent";
import { tags } from "../ControlWindow/CategoriesComponent/tags.config";
import TagsComponent from "../ControlWindow/CategoriesComponent/TagsComponent";

import { lang } from "../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './GalleryStyle';
import style from './../ControlWindow/CategoriesComponent/CategoriesStyle';
import grid from './../../styles/baseStyle';

export default class GalleryComponent extends Component {
  state = {
    photo: [],
    showCategories: null,
    currentIndexCategories: null,
    showDate: false,
    currentIndexTag: null,
    tag: null,
    showedMob: false
  };

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
      if (typeof item.tag === 'string') {
        if (item.tag === this.state.tag) {
          img = item
        }
      } else {
        item.tag.forEach((item) => {
          if (item === this.state.tag){
            return img = item
          }
        });
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

    images = this.state.showDate ? images.slice().reverse() : images;

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
        <div className={css(styles.windowHeader)}>
          <p className={css(styles.text)}>{ head[lang] }</p>
        </div>
      </div>
      <div style={showed2} className={css(contentWrapper)}>
        <div style={borderNone} className={css(styles.windowTask)}>
          <div className={css(styles.windowHeader)}>
            <p className={css(styles.text)}>{ head[lang] }</p>
          </div>
          <div style={textAlign} className={css(style.windowControl)}>
            <p className={css(style.subtitle)}>{ subtitle[lang] }</p>
            { checkbox }
          </div>
          <div style={textAlign} className={css(style.windowControl)}>
            <p className={css(style.subtitleDate)}>{ subtitleDate[lang] }</p>
            { checkboxDate }
          </div>
        </div>
        <div style={borderNone} className={css(styles.windowTask)}>
          <div className={css(styles.windowHeader)}>
            <p className={css(styles.text)}>{ headerTag[lang] }</p>
          </div>
          <div className={css(style.windowControlTag)}>
            { tag }
          </div>
        </div>
      </div>
      <PhotoComponent img={images} />
    </section>
  }
}