import React, { Component } from 'react';
import {imgItem} from "./imgItem";
import {SlideComponent} from "./SlideComponent";

import { css } from 'aphrodite/no-important';
import styles from './ModalStyle';

class ModalComponent extends Component {
  render() {

    const slide = imgItem.map((item, index) => {
      return <SlideComponent
        key={index}
        image={item.imgUrl}
        show={this.props.currentIndex === index}
      />
    });

    const show = this.props.modal ? styles.showed : '';

    return <div className={css(styles.modalBg, show)}>
      { slide }
      <button className={css(styles.btnRemove)} onClick={this.props.removeClass}>X</button>
    </div>
  }
}

export { ModalComponent };