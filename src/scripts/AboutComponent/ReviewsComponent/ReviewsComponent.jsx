import React, { Component } from 'react';
import { reviewsItem } from "./reviews.config";
import ModalComponent from "./ModalComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import style from './../../../styles/baseStyle';
import styles from './ReviewsStyle';

export default class ReviewsComponent extends Component {
  state = {
    modal: true
  };

  handleClick() {
    this.setState({modal: true});
    document.body.style.overflow = 'hidden';
  }

  render() {

    const header = reviewsItem.map((item, index) => {
      return <div key={index} className={css(styles.header)}>
        <div className={css(styles.head)}>
          <i style={{fontSize: '1.7rem'}} className='far fa-comment'/>
          <h1 className={css(styles.h1)}>{item.header[lang]}</h1>
        </div>
        <div className={css(styles.btn)}>
          <button className={css(styles.button)} onClick={() => this.handleClick()}>
            <p className={css(styles.btn__text)}>{ item.button[lang] }</p>
            <i style={{color: '#e45242'}} className='far fa-comment'/>
          </button>
        </div>
      </div>
    });

    return <div className={css(style.pageS)}>
      <div className={css(styles.contentWrapper)}>
        { header }
      </div>
      {this.state.modal &&
        <ModalComponent/>
      }
    </div>
  }
}