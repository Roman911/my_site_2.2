import React, { Component, Fragment } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './CategoriesStyle';

class DateComponent extends Component {
  render() {

    const styleLine = this.props.show ? styles.lineShow : '';
    const styleCircle = this.props.show ? styles.circleShow : '';
    const styleName = this.props.show ? styles.nameShow : '';

    let title = this.props.show ? this.props.title2 : this.props.title;

    return <Fragment>
      <label className={css(styles.label)} >
        <input
          className={css(styles.input)}
          name={this.props.name}
          type="checkbox"
        />
        <div className={css(styles.checkbox)}>
          <span className={css(styles.line, styleLine)} />
          <span className={css(styles.circle, styleCircle)} />
        </div>
        <p className={css(styles.name, styleName)}>{title}</p>
      </label>
    </Fragment>
  }
}

export { DateComponent };