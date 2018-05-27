import React, { Component, Fragment } from 'react';
import { reviewsModalItem } from "../reviewsModal.config";
import { inputItem } from "./input.config";

import { lang } from "../../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './InputStyle';

export default class InputComponent extends Component {

  onChangeHandlerName(event) {
    this.props.onAddChangeName(event.target.value)
  }

  onChangeHandlerReview(event) {
    this.props.onAddChangeReview(event.target.value)
  }

  render() {

    const header = reviewsModalItem.map((item, index) => {
      return <h5 key={index}>{ item.headerInput[lang] }</h5>
    });

    const input = inputItem.map((item, index) => {
      return <Fragment key={index}>
        <input
          className={css(styles.input)}
          type="text"
          placeholder={ item.name[lang] }
          onChange={this.onChangeHandlerName.bind(this)}
          value={this.props.name}
        />
        <textarea
          className={css(styles.input)}
          placeholder={ item.review[lang] }
          onChange={this.onChangeHandlerReview.bind(this)}
          rows='5' name="Message"
        />
      </Fragment>
    });

    return <div className={css(styles.contentWrapper)}>
      { header }
      { input }
    </div>
  }
}