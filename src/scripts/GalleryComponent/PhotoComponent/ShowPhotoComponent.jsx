import React, { Component, Fragment } from 'react';
import ColumnComponent from './ColumnComponent';
import ModalComponent from "./ModalComponent";

import { css } from 'aphrodite/no-important';
import styles from './ShowStyle';

export default class ShowPhotoComponent extends Component {
  constructor(props) {
    super(props);
    const imgUrl = this.props.img.map((item) => {
      return item.imgUrl
    });
    this.state = {
      modal: false,
      modalImg: 0,
      images: imgUrl,
      currentIndex: 0,
      length: 0,
      res: false
    };
    this.removeClass = this.removeClass.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress.bind(this), false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress.bind(this), false)
  }

  handleKeyPress(event) {
    if (event.key === 'ArrowRight') {
      this.next()
    }
    if (event.key === 'ArrowLeft') {
      this.prev()
    }
    if (event.key === 'Escape') {
      this.removeClass()
    }
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

  next() {
    if (this.state.currentIndex < this.state.length - 1) {
      this.setState({currentIndex: this.state.currentIndex + 1})
    }
    else {
      this.setState({currentIndex: 0})
    }
  }

  prev() {
    console.log('prev');
    if (this.state.currentIndex > 0) {
      this.setState({currentIndex: this.state.currentIndex - 1})
    }
    else {
      this.setState({currentIndex: this.state.length - 1})
    }
  }

  render() {

    const images = this.props.img;

    const img = images.map((item, index) => {
      return <div key={index} className={css(styles.item)} >
        <img
          className={css(styles.img)}
          src={item.imgUrl}
          alt=""
          onClick={() => this.setModal(true, index, images.length)}
        />
      </div>
    });

    return <Fragment>
      <ColumnComponent img={img}/>
      {this.state.modal &&
        <ModalComponent
          img={this.props.img}
          currentIndex={this.state.currentIndex}
          modal={this.state.modal}
          removeClass={this.removeClass}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      }
    </Fragment>
  }
}