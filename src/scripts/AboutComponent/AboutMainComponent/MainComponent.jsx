import React, { Component } from 'react'
import { contentItem } from "../About.config";

import { lang } from "../../log/lang";

import {css} from "aphrodite/no-important";
import styles from "./MainStyle";
import grid from "../../../styles/gridStyles";

export default class MainComponent extends Component {
  render() {

    let className;
    if (window.matchMedia("(max-width: 768px)").matches) {
      className = grid.width100;
    } else {
      className = grid.width50;
    }

    const text = contentItem.map((item, index) => {
      return <p key={index} className={css(styles.text)}>{item.text2[lang]}</p>
    });

    return <div className={css(grid.gridContainer)}>
      <div className={css(className, styles.content)}>
        <img className={css(styles.img)} src="./assets/photo_003.jpg" alt=""/>
      </div>
      <div className={css(className, styles.content)}>
        { text }
      </div>
    </div>
  }
}