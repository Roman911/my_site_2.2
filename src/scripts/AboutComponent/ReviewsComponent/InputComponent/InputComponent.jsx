import React, { Component } from 'react';

import { lang } from "../../../log/lang";
import { header, name, review } from "./InputVariables";

import { css } from 'aphrodite/no-important';
import styles from './../../../../styles/InputStyle';

export default class InputComponent extends Component {

  onChangeHandlerName(event) {
    this.props.onAddChangeName(event.target.value)
  }

  onChangeHandlerReview(event) {
    this.props.onAddChangeReview(event.target.value)
  }

  render() {

    return <div className={css(styles.contentWrapper)}>
      <h5>{ header[lang] }</h5>
      <input
        className={css(styles.input)}
        type="text"
        placeholder={ name[lang] }
        onChange={this.onChangeHandlerName.bind(this)}
      />
      <textarea
        className={css(styles.input)}
        placeholder={ review[lang] }
        onChange={this.onChangeHandlerReview.bind(this)}
        rows='5'
      />
    </div>
  }
}