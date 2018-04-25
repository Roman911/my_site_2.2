import React, { Component } from 'react';
import {SlideComponent} from "./SlideComponent";

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

    const slide = this.props.img.map((item, index) => {
      return <SlideComponent
        key={index}
        image={item.imgUrl}
        show={this.props.currentIndex === index}
      />
    });

    const show = this.props.modal ? styles.showed : '';

    return <div className={css(styles.modalBg, show)}>
      <div className={css(styles.relative)}>
        <button className={css(styles.btnNextPrev)} onClick={() => this.next()}>
          x
        </button>
        { slide }
        <button onClick={() => this.prev()}>y</button>
      </div>
      <button className={css(styles.btnRemove)} onClick={this.props.removeClass}>X</button>
    </div>
  }
}

export { ModalComponent };