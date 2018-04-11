import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './IncertStyle'

class InsertComponent extends Component {
  render() {
    return <section style={this.props.background} className={css(styles.relative, styles.block)}>
      <div className={css(styles.nameBlock)}>
        <h2 className={css(styles.text)}>{ this.props.name }</h2>
      </div>
    </section>
  }
}

export { InsertComponent };