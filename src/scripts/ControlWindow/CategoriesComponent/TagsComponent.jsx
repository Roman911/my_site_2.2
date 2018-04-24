import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './TagsStyles';

class TagsComponent extends Component {

  render() {

    const styleActive = this.props.show ? styles.btnActive : '';
    const styleText = this.props.show ? styles.btnText : '';

    return <button className={css(styles.btn, styleActive)}>
      <p className={css(styleText)}>{ this.props.name }</p>
    </button>
  }
}

export { TagsComponent };