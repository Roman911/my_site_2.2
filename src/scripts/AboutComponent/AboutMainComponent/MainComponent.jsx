import React, { Component } from 'react'
import { text2 } from "../About.variables";
import img from './../../../assets/photo_003.jpg';

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

    return <div className={css(grid.gridContainer)}>
      <div className={css(className, styles.content)}>
        <img className={css(styles.img)} src={ img } alt=""/>
      </div>
      <div className={css(className, styles.content)}>
        <p className={css(styles.text)}>{ text2[lang] }</p>
      </div>
    </div>
  }
}