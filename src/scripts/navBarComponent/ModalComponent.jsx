import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import InputComponent from "./InputComponent/InputComponent";

import { lang } from "../log/lang";

import {css} from "aphrodite/no-important";
import styles from "./../../styles/modalStyle";

export default class ModalComponent extends Component {
  state = {
    name: '',
    passive: '',
    data: false,
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
    if ( this.state.name === '1') {
      if (this.state.password === '1') {
        this.setState({ data: true, error: false });
        this.addItem()
      }
    } else {
      this.setState({ error: true })
    }
  }

  addItem() {
    fetch('./backend/Review.txt')
      .then(function(response) {
        console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
        console.log(response.status); // 200

        return response.text();
      })
      .then(function(user) {
        let arr = JSON.parse(user);
        console.log(arr); // iliakan
        let arr2 = arr.map((item) => {
          return item.name
        });
        console.log(arr2)
      })
      .catch( console.log );
  }

  render() {

    const enter = ['Вхід', 'Вход', 'Enter'];
    const data = ['Дані', 'Данніе', 'Data'];

    const iconEnter = 'fas fa-user';
    const iconData = 'fas fa-archive';

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
          <button onClick={() => this.props.removeModal()} className={css(styles.btnRemove)} >X</button>
        </div>
      </div>,
      this.root
    );
  }
}