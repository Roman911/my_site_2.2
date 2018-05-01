import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './DescriptionStyle';

class DescriptionComponent extends Component {
  render() {

    const date = new Date(this.props.date);
    const dateForm = date.toLocaleDateString();

    const show = this.props.show ? styles.showed : '';
    return <div className={css(styles.description, show)}>
      <div className={css(styles.header)}>
        <h5 className={css(styles.text)}>{this.props.title}</h5>
      </div>
      <div className={css(styles.footer)}>
        <h5 className={css(styles.text)}>{dateForm}</h5>
      </div>
    </div>
  }
}

export { DescriptionComponent };