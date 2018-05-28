import React, { Component } from 'react';
import DateTime from "../../DataTime/DataTime";

import { css } from 'aphrodite/no-important';
import styles from './DescriptionStyle';

export default class DescriptionComponent extends Component {
  render() {

    const date = new Date(this.props.date);
    const show = this.props.show ? styles.showed : '';

    return <div className={css(styles.description, show)}>
      <div className={css(styles.header)}>
        <h5 className={css(styles.text)}>{this.props.title}</h5>
      </div>
      <div className={css(styles.footer)}>
        <h5 className={css(styles.text)}>
          <DateTime value={ date } format='DD MMMM YYYY'/>
        </h5>
      </div>
    </div>
  }
}