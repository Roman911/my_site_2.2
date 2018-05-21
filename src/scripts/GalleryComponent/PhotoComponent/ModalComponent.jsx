import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { SlideComponent } from "./SlideComponent";
import { DescriptionComponent } from "./DescriptionComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './ModalStyle';

class ModalComponent extends Component {
  state = {
    currentIndex: this.props.currentIndex
  };

  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root)
  }

  componentWillUnmount() {
    document.body.removeChild(this.root)
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

    return ReactDOM.createPortal(
    <div className={css(styles.modalBg)}>
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
    </div>,
    this.root
    );
  }
}

export { ModalComponent };