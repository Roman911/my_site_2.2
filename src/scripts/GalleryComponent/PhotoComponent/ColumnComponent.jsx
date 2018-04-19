import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import gridStyles from './../../../styles/gridStyles';

class ColumnComponent extends Component {

  render() {

    const img = this.props.img;

    const imgColumn1 = img.filter((item, index) => {
      let num;
      let img;
      if (window.matchMedia("(max-width: 768px)").matches) {
        num = 2
      } else {
        num = 4
      }
      if ((index % num) === 0) {
        img = item
      }
      return img
    });

    const imgColumn2 = img.filter((item, index) => {
      let num;
      let img;
      if (window.matchMedia("(max-width: 768px)").matches) {
        num = 2
      } else {
        num = 4
      }
      if (((index - 1) % num) === 0) {
        img = item
      }
      return img
    });

    const imgColumn3 = img.filter((item, index) => {
      let img;
      if (((index - 2) % 4) === 0) {
        img = item
      }
      return img
    });

    const imgColumn4 = img.filter((item, index) => {
      let img;
      if (((index - 3) % 4) === 0) {
        img = item
      }
      return img
    });

    let grids;
    if (window.matchMedia("(max-width: 576px)").matches) {
      grids = [
        <div className={css(gridStyles.width100)}>{ img }</div>
      ];
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      grids = [
        <div className={css(gridStyles.width50)}>{ imgColumn1 }</div>,
        <div className={css(gridStyles.width50)}>{ imgColumn2 }</div>
      ];
    } else {
      grids = [
        <div className={css(gridStyles.width25)}>{ imgColumn1 }</div>,
        <div className={css(gridStyles.width25)}>{ imgColumn2 }</div>,
        <div className={css(gridStyles.width25)}>{ imgColumn3 }</div>,
        <div className={css(gridStyles.width25)}>{ imgColumn4 }</div>
      ];
    }

    return <div className={css(gridStyles.gridContainer)}>
      { grids }
    </div>
  }
}

export { ColumnComponent };