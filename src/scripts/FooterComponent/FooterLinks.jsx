import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './FooterLinksStyle'

class FooterLinks extends Component {
  render() {
    return <a
      className={css(styles.link)}
      href={this.props.href}
      target={this.props.target}
    >
      <span className={css(styles.icon)}>
        <i className={this.props.class}/>
      </span>

    </a>
  }
}

export { FooterLinks };