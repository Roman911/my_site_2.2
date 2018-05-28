import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import InputComponent from "./InputComponent/InputComponent";
import { feedbackStore } from "../stores/feedback.store";
import ConclusionDataComponent from "./ConclusionDataComponent";
import { enter, data, iconEnter, iconData } from './NavBar.variables';

import { lang } from "../log/lang";

import {css} from "aphrodite/no-important";
import styles from "./../../styles/modalStyle";

export default class ModalComponent extends Component {
  state = {
    name: '',
    passive: '',
    data: false,
    feedbackData: [],
    error: false
  };


  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root)
  }

  componentWillUnmount() {
    document.body.removeChild(this.root)
  }

  onChangeHandlerName(name) {
    this.setState({ name: name })
  }

  onChangeHandlerPassword(password) {
    this.setState({ password: password })
  }

  handleClick() {
    if ( this.state.name === 'Admin') {
      if (this.state.password === 'Admin') {
        this.setState({ data: true, error: false });
        this.addItem()
      }
    } else {
      this.setState({ error: true })
    }
  }

  addItem() {
    feedbackStore.subscribe('dataChanged', (item) => {
      this.setState({ feedbackData: item })
    });
    feedbackStore.getList()
  }

  render() {

    const feedback = this.state.feedbackData.slice().reverse();

    const conclusionData = feedback.map((item, index) => {
      return <div key={index} className={css(styles.feedbackWrapper)}>
        <ConclusionDataComponent
          name={item.name}
          date={item.date}
          email={item.email}
          text={item.text}
        />
      </div>
    });

    return ReactDOM.createPortal(
      <div className={css(styles.modalBg)}>
        <div className={css(styles.modal)}>
          <div className={css(styles.header)}>
            <i style={{fontSize: '1.3rem', color: '#4d4d4d'}} className={ this.state.data ? iconData : iconEnter }/>
            <h4 className={css(styles.h4)}>{ this.state.data ? data[lang] : enter[lang] }</h4>
          </div>
          {this.state.data || <Fragment>
            <InputComponent
              onAddChangeName={this.onChangeHandlerName.bind(this)}
              onAddChangePassword={this.onChangeHandlerPassword.bind(this)}
              error={this.state.error}
            />
            <div className={css(styles.btn)}>
              <button onClick={() => this.handleClick()} className={css(styles.button)}>
                <i className='fab fa-telegram-plane'/>
                <p className={css(styles.btn__text)}>subm</p>
                <p className={css(styles.btn__text_red)}>it</p>
              </button>
            </div>
          </Fragment>}
          {
            this.state.data &&
            conclusionData
          }
          <button onClick={() => this.props.removeModal()} className={css(styles.btnRemove)} >X</button>
        </div>
      </div>,
      this.root
    );
  }
}