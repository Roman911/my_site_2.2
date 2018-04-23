import React, { Component, Fragment } from 'react';
import { imgItem } from "./imgItem";
import { ColumnComponent } from './ColumnComponent';
import {ModalComponent} from "./ModalComponent";

import { css } from 'aphrodite/no-important';
import styles from './ShowStyle';

class ShowPhotoComponent extends Component {
  constructor() {
    super();
    const imgUrl = imgItem.map((item) => {
      return item.imgUrl
    });
    this.state = {
      modal: false,
      modalImg: 0,
      images: imgUrl,
      currentIndex: 0,
      res: false
    };
    this.removeClass = this.removeClass.bind(this)
  }

  removeClass() {
    this.setState({modal: false});
    document.body.style.overflow = '';
  }

  setModal(visible, index, length) {
    this.setState({modalImg: this.state.images[index]});
    this.setState({modal: visible});
    this.setState({currentIndex: index});
    this.setState({length: length});
    document.body.style.overflow = 'hidden';
  }

  render() {

    const images = this.props.img;
    const img = images.map((item, index) => {
      return <div key={index} className={css(styles.item)} >
        <img
          className={css(styles.img)}
          src={item.imgUrl}
          alt=""
          onClick={() => this.setModal(true, index, imgItem.length)}
        />
      </div>
    });

    return <Fragment>
      <ColumnComponent img={img}/>
      <ModalComponent
        currentIndex={this.state.currentIndex}
        modal={this.state.modal}
        removeClass={this.removeClass}
      />
    </Fragment>
  }
}

export { ShowPhotoComponent };