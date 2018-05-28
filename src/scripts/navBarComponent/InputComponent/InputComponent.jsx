import React, { Component } from 'react';
import { header, name, password, error } from './../NavBar.variables';

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './../../../styles/InputStyle';

export default class InputComponent extends Component {

  onChangeHandlerName(event) {
    this.props.onAddChangeName(event.target.value)
  }

  onChangeHandlerPassword(event) {
    this.props.onAddChangePassword(event.target.value)
  }

  render() {

    return <div className={css(styles.contentWrapper)}>
      <h5>{ header[lang] }</h5>
      { this.props.error && <p style={{color: '#e45242', fontStyle: 'italic'}}>{ error[lang] }</p> }
      <input
        style={{marginTop: '20px'}}
        className={css(styles.input)}
        type="text"
        placeholder={ name[lang] }
        onChange={this.onChangeHandlerName.bind(this)}
      />
      <input
        style={{marginTop: '20px'}}
        className={css(styles.input)}
        type="password"
        placeholder={ password[lang] }
        onChange={this.onChangeHandlerPassword.bind(this)}
      />
    </div>
  }
}