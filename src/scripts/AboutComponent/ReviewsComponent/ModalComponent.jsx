import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { header } from "./../About.variables";
import SkillsComponent from "./SkillsComponent/SkillsComponent";
import InputComponent from "./InputComponent/InputComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './../../../styles/modalStyle';

export default class ModalComponent extends Component {
  state = {
    currentIndexPhoto: undefined,
    currentIndexRetouch: undefined,
    name: '',
    review: '',
    date: new Date()
  };

  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root)
  }

  componentWillUnmount() {
    document.body.removeChild(this.root)
  }

  onAddCIPhoto(index) {
    if (this.state.currentIndexPhoto === index) {
      this.setState({ currentIndexPhoto: undefined })
    } else {
      this.setState({ currentIndexPhoto: index })
    }
  }

  onAddCIRetouch(index) {
    if (this.state.currentIndexRetouch === index) {
      this.setState({ currentIndexRetouch: undefined })
    } else {
      this.setState({ currentIndexRetouch: index })
    }
  }

  onAddChangeName(event) {
    this.setState({ name: event});
  }

  onAddChangeReview(event) {
    this.setState({ review: event});
  }

  handleClick() {
    this.props.removeModal();
    this.props.addReview(this.state);
    fetch('./backend/actionReview.php', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentIndexPhoto: this.state.currentIndexPhoto + 1,
        currentIndexRetouch: this.state.currentIndexRetouch + 1,
        name: this.state.name,
        review: this.state.review,
        date: new Date()
      })
    })
  }

  render() {

    return ReactDOM.createPortal(
      <div className={css(styles.modalBg)}>
        <div className={css(styles.modal)}>
          <div className={css(styles.header)}>
            <i style={{fontSize: '1.3rem'}} className='far fa-comments'/>
            <h4 className={css(styles.h4)}>{ header[lang] }</h4>
          </div>
          <SkillsComponent
            onAddCIPhoto={this.onAddCIPhoto.bind(this)}
            onAddCIRetouch={this.onAddCIRetouch.bind(this)}
            currentIndexPhoto={this.state.currentIndexPhoto}
            currentIndexRetouch={this.state.currentIndexRetouch}
          />
          <InputComponent
            onAddChangeName={this.onAddChangeName.bind(this)}
            onAddChangeReview={this.onAddChangeReview.bind(this)}
            name={this.state.name}
            review={this.state.review}
          />
          <div className={css(styles.btn)}>
            <button onClick={() => this.handleClick()} className={css(styles.button)}>
              <i className='fab fa-telegram-plane'/>
              <p className={css(styles.btn__text)}>subm</p>
              <p className={css(styles.btn__text_red)}>it</p>
            </button>
          </div>
        </div>
        <button className={css(styles.btnRemove)} onClick={this.props.removeModal}>X</button>
      </div>,
      this.root
    );
  }
}