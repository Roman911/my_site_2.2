import React, { Component } from 'react';
import { reviewHeader, button } from "./../About.variables";
import ModalComponent from "./ModalComponent";
import ConclusionReviewsComponent from "./ConclusionReviewsComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import style from './../../../styles/baseStyle';
import styles from './ReviewsStyle';

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

    const conclusionReviews = this.props.review.map((item, index) => {
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
        <div className={css(styles.header)}>
          <div className={css(styles.head)}>
            <i style={{fontSize: '1.4rem'}} className='far fa-comment'/>
            <h3 className={css(styles.h3)}>{reviewHeader[lang]}</h3>
          </div>
          <div className={css(styles.btn)}>
            <button className={css(styles.button)} onClick={() => this.openModal()}>
              <p className={css(styles.btn__text)}>{ button[lang] }</p>
              <i style={{color: '#e45242'}} className='far fa-comment'/>
            </button>
          </div>
        </div>
        { conclusionReviews }
      </div>
      {this.state.modal &&
        <ModalComponent addReview={this.props.addReview.bind(this)} removeModal={this.removeModal.bind(this)}/>
      }
    </div>
  }
}