import React, { Component } from 'react';
import ReactDOM from "react-dom";

import styles from "./ModalStyle";
import {css} from "aphrodite/no-important";

export default class ModalComponent extends Component {

  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root)
  }

  componentWillUnmount() {
    document.body.removeChild(this.root)
  }

  render() {
    return ReactDOM.createPortal(
      <div className={css(styles.bgWindow)}>
        <div className={css(styles.modal)}>
          { this.props.error }
        </div>
      </div>,
      this.root
    );
  }
}