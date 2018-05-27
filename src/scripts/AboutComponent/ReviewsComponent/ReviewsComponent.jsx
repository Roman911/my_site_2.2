import React, { Component } from 'react';
import { reviewsItem } from "./reviews.config";
import ModalComponent from "./ModalComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import style from './../../../styles/baseStyle';
import styles from './ReviewsStyle';
import ConclusionReviewsComponent from "./ConclusionReviewsComponent";

export default class ReviewsComponent extends Component {
  state = {
    modal: false
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress.bind(this), false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress.bind(this), false)
  }

  handleKeyPress(event) {
    if (event.key === 'Escape') {
      this.removeModal()
    }
  }

  openModal() {
    this.setState({modal: true});
    document.body.style.overflow = 'hidden';
  }

  removeModal() {
    this.setState({modal: false});
    document.body.style.overflow = '';
  }

  render() {

    const header = reviewsItem.map((item, index) => {
      return <div key={index} className={css(styles.header)}>
        <div className={css(styles.head)}>
          <i style={{fontSize: '1.4rem'}} className='far fa-comment'/>
          <h3 className={css(styles.h3)}>{item.header[lang]}</h3>
        </div>
        <div className={css(styles.btn)}>
          <button className={css(styles.button)} onClick={() => this.openModal()}>
            <p className={css(styles.btn__text)}>{ item.button[lang] }</p>
            <i style={{color: '#e45242'}} className='far fa-comment'/>
          </button>
        </div>
      </div>
    });

    const review = this.props.review.slice().reverse();
    const conclusionReviews = review.map((item, index) => {
      return <div key={index} className={css(styles.reviewWrapper)}>
        <ConclusionReviewsComponent
          name={item.name}
          date={item.date}
          review={item.review}
        />
      </div>
    });

    return <div className={css(style.pageS)}>
      <div className={css(styles.contentWrapper)}>
        { header }
        { conclusionReviews }
      </div>
      {this.state.modal &&
        <ModalComponent removeModal={this.removeModal.bind(this)}/>
      }
    </div>
  }
}