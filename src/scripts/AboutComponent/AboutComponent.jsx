import React, { PureComponent, Fragment } from 'react';
import { reviewStore } from './../stores/review.store'
import HeaderComponent from "./AboutHeaderComponent/HeaderComponent";
import MainComponent from "./AboutMainComponent/MainComponent";
import PropertiesComponent from "./AboutPropertiesComponent/PropertiesComponent";
import BarComponent from "./AboutBarComponent/BarComponent";
import ReviewsComponent from "./ReviewsComponent/ReviewsComponent";

import { css } from 'aphrodite/no-important';
import style from './../../styles/baseStyle';
import styles from './AboutStyle';

export default class AboutComponent extends PureComponent {
  state = {
    review: [],
    reviewNew: null
  };

  componentDidMount() {
    reviewStore.subscribe('dataChanged', (review) => {
      this.setState({ review: review })
    });
    reviewStore.getList()
  }

  componentWillUnmount() {
    reviewStore.subscribe('dataChanged', (review) => {
      this.setState({ review: review })
    });
    reviewStore.getList()
  }

  addReview(review) {
    this.setState({ reviewNew: review })
  }

  render() {

    let review = this.state.review;
    const reviewNew = this.state.reviewNew;

    if (this.state.reviewNew !== null) {
      review.push(reviewNew)
    }

    let reviewReverse = review.reverse();

    return <Fragment>
      <div className={css(style.pageM, styles.pageWrapper)}>
        <HeaderComponent />
        <MainComponent />
        <PropertiesComponent review={reviewReverse}/>
      </div>
      <BarComponent/>
      <ReviewsComponent addReview={this.addReview.bind(this)} review={reviewReverse}/>
    </Fragment>
  }
}