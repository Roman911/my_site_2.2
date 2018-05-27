import React, { Component } from 'react'

import { css } from 'aphrodite/no-important';
import styles from './AboutPropertiesStyle';

export default class AboutProperties extends Component {

  render() {

    const value = this.props.value;
    const width = {width: value + '%'};

    return <div className={css(styles.block)}>
      <div className={css(styles.header)}>
        <i className={this.props.class}/>
        <p className={css(styles.text)}>{this.props.header}</p>
      </div>
      <div className={css(styles.bar)}>
        <div style={width} className={css(styles.rate)}>
          <p className={css(styles.textRate)}>{ value }%</p>
        </div>
      </div>
    </div>
  }
}