import React, { Component, Fragment } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './CategoriesStyle';

class CategoriesComponent extends Component {
  constructor() {
    super();
    this.state = {
      chek: false
    }
  }

  render() {
    return <Fragment>
      <label className={css(styles.label)} >
        <input
          className={css(styles.input)}
          name={this.props.name}
          type="checkbox"
        />
        <div className={css(styles.checkbox)}>
          <span className={css(styles.line)} />
          <span className={css((styles.circle))} />
        </div>
        <p className={css(styles.name)}>{this.props.name}</p>
      </label>
    </Fragment>
  }
}

export { CategoriesComponent };