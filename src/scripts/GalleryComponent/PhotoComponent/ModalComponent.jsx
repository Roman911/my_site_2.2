import React, { Component } from 'react';
import { SlideComponent } from "./SlideComponent";
import { DescriptionComponent } from "./DescriptionComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './ModalStyle';

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.props.currentIndex
    }
  }

  next() {
    this.props.next(this.state.currentIndex);
  }

  prev() {
    this.props.prev(this.state.currentIndex);
  }

  render() {

    const img = this.props.img;

    const slide = img.map((item, index) => {
      return <SlideComponent
        key={index}
        image={item.imgUrl}
        show={this.props.currentIndex === index}
      />
    });

    const description = img.map((item, index) => {
      return <DescriptionComponent
        key={index}
        title={item.title[lang]}
        date={item.date}
        show={this.props.currentIndex === index}
      />
    });

    const show = this.props.modal ? styles.showed : '';

    return <div className={css(styles.modalBg, show)}>
      <div className={css(styles.relative)}>
        { slide }
        <div className={css(styles.btnOpacity)}>
          { description }
          <button className={css(styles.btn, styles.btnPrev)} onClick={() => this.prev()}>
            <i className='fas fa-chevron-left'/>
          </button>
          <button className={css(styles.btn, styles.btnNext)} onClick={() => this.next()}>
            <i className='fas fa-chevron-right'/>
          </button>
        </div>
      </div>
      <button className={css(styles.btnRemove)} onClick={this.props.removeClass}>X</button>
    </div>
  }
}

export { ModalComponent };