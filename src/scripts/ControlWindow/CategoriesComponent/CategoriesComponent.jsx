import React, { Component, Fragment } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './CategoriesStyle';

export default class CategoriesComponent extends Component {

  render() {

    const styleLine = this.props.show ? styles.lineShow : '';
    const styleCircle = this.props.show ? styles.circleShow : '';
    const styleName = this.props.show ? styles.nameShow : '';

    const matchMedia = window.matchMedia("(max-width: 768px)").matches;
    const displayNone = matchMedia ? {display: 'none'} : {display: 'flex'};
    const textAlign = matchMedia ? {justifyContent: 'center'} : {alignItems: 'center'};

    return <Fragment>
      <label style={textAlign} className={css(styles.label)} >
        <input
          className={css(styles.input)}
          name={this.props.name}
          type="checkbox"
        />
        <div style={displayNone} className={css(styles.checkbox)}>
          <span className={css(styles.line, styleLine)} />
          <span className={css(styles.circle, styleCircle)} />
        </div>
        <p className={css(styles.name, styleName)}>{this.props.title}</p>
      </label>
    </Fragment>
  }
}