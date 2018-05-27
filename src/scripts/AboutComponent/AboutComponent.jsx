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
    review: []
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

  render() {
    return <Fragment>
      <div className={css(style.pageM, styles.pageWrapper)}>
        <HeaderComponent />
        <MainComponent />
        <PropertiesComponent review={this.state.review}/>
      </div>
      <BarComponent/>
      <ReviewsComponent review={this.state.review}/>
    </Fragment>
  }
}