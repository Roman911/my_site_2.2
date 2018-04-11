import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './PhotoStyle';
import gridStyles from './../../../styles/gridStyles'

class ColumnComponent extends Component {
  render() {

    const imgItem = this.props.img;

    const imgColumn1 = imgItem.map((item, index) => {
      return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
        <img src={item.imgUrl} alt=""/>
      </div>
    });

    const imgColumn2 = imgItem.map((item, index) => {
      if ((index % 2) === 0) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={item.imgUrl}/>
        </div>
      }
    });

    const imgColumn22 = imgItem.map((item, index) => {
      if (((index - 1) % 2) === 0) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={item.imgUrl}/>
        </div>
      }
    });

    const img = imgItem.map((item, index) => {
      if ((index % 4) === 0) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={item.imgUrl}/>
        </div>;
      }
    });
    const img2 = imgItem.map((item, index) => {
      if (((index - 1) % 4) === 0) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={item.imgUrl}/>
        </div>;
      }
    });
    const img3 = imgItem.map((item, index) => {
      if (((index - 2) % 4) === 0) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={item.imgUrl}/>
        </div>;
      }
    });
    const img4 = imgItem.map((item, index) => {
      if (((index - 3) % 4) === 0) {
        return <div key={index} className="item" onClick={() => this.setModal(true, index, imgItem.length)}>
          <img src={item.imgUrl}/>
        </div>;
      }
    });

    let grids;
    if (window.matchMedia("(max-width: 576px)").matches) {
      grids = [<div>{ imgColumn1 }</div>];
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      grids = [<div>{ imgColumn2 }</div>, <div>{ imgColumn22 }</div>];
    } else {
      grids = [<div>{ img }</div>, <div>{ img2 }</div>, <div>{ img3 }</div>, <div>{ img4 }</div>];
    }

    return <div className={css(gridStyles.gridContainer)}>
      { grids }
    </div>
  }
}

export { ColumnComponent };