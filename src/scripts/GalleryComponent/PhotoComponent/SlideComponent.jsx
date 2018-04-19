import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './SlideStyle';

class SlideComponent extends Component {
  render() {
    const show = this.props.show ? styles.showed : '';
    return <div className={css(styles.slide, show)}>
      <img className={css(styles.img)} src={this.props.image} alt=""/>
    </div>
  }
}

export { SlideComponent };