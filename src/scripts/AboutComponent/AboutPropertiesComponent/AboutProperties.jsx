import React, { Component } from 'react'

import { css } from 'aphrodite/no-important';
import styles from './AboutPropertiesStyle';

class AboutProperties extends Component {
  render() {
    const wight = this.props.properties;
    let wig = {width: wight};
    return <div className={css(styles.block)}>
      <div className={css(styles.header)}>
        <i className={this.props.class}/>
        <p className={css(styles.text)}>{this.props.header}</p>
      </div>
      <div className={css(styles.bar)}>
        <div style={wig} className={css(styles.rate)}>
          <p className={css(styles.textRate)}>{this.props.properties}</p>
        </div>
      </div>
    </div>
  }
}

export { AboutProperties };