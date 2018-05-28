import React, { Component } from 'react';
import { formHeader, name, email, message, nameError, emailError, textError, errorOk } from './../Contacts.variables';
import ModalComponent from "./ModalComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './FormStyle';
import style from './ModalStyle';

export default class FormComponent extends Component {
  state = {
    error: null,
    modal: false,
    name: '',
    email: '',
    text: ''
  };

  onChangeHandlerName(event) {
    this.setState({ name: event.target.value});
  }

  onChangeHandlerEmail(event) {
    this.setState({ email: event.target.value});
  }

  onChangeHandlerText(event) {
    this.setState({ text: event.target.value});
  }

  addModal() {
    if (this.state.name === '') {
      this.setState({modal: true, error: 'nameError'})
    } else if (this.state.email === '') {
      this.setState({modal: true, error: 'emailError'})
    } else if (this.state.text === '') {
      this.setState({modal: true, error: 'textError'})
    } else {
      this.setState({modal: true, error: 'error'});
    }
  }

  removeMod() {
    this.setState({modal: false, error: null})
  }

  handleClick() {
    this.addModal();
    setTimeout(this.removeMod.bind(this), 2000);
    this.state.name === '' ||  this.state.email === ''  || this.state.text === '' ||
    this.setState({name: '', email: '', text: ''});
    fetch('./backend/action.php', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        text: this.state.text,
        date: new Date()
      })
    })
  }

  render() {

    let error;
    if (this.state.error === 'nameError') {
      error = <p className={css(style.text)}>{ nameError[lang] }</p>
    } else if (this.state.error === 'emailError') {
      error = <p className={css(style.text)}>{ emailError[lang] }</p>
    } else if (this.state.error === 'textError') {
      error = <p className={css(style.text)}>{ textError[lang] }</p>
    } else if (this.state.error === 'error') {
      error = <p className={css(style.text)}>{ errorOk[lang] }</p>
    }

    return <div className={css(this.props.width, styles.item)}>
      <div className={css(styles.header)}>
        <p className={css(styles.text)}>{ formHeader[lang] }</p>
      </div>
      <input
        className={css(styles.input)}
        type="text" placeholder={ name[lang] }
        onChange={this.onChangeHandlerName.bind(this)}
        value={this.state.name}
      />
      <input
        className={css(styles.input)}
        type="email" placeholder={ email[lang] }
        onChange={this.onChangeHandlerEmail.bind(this)}
        value={this.state.email}
      />
      <textarea
        className={css(styles.input)}
        placeholder={ message[lang] }
        onChange={this.onChangeHandlerText.bind(this)}
        value={this.state.text}
        rows='5' name="Message"
      />
      <div className={css(styles.btn)}>
        <button onClick={() => this.handleClick()} className={css(styles.button)}>
          <i className='fab fa-telegram-plane'/>
          <p className={css(styles.btn__text)}>subm</p>
          <p className={css(styles.btn__text_red)}>it</p>
        </button>
      </div>
      {this.state.modal &&
        <ModalComponent
          error={ error }
        />
      }
    </div>
  }
}