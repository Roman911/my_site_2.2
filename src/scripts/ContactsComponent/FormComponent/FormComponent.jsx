import React, { Component, Fragment } from 'react';
import { formItem } from "./form.config";

import { css } from 'aphrodite/no-important';
import styles from './FormStyle'

class FormComponent extends Component {

  render() {

    const lang= this.props.lang;

    const header = formItem.map((item, index) => {
      return <div key={index} className={css(styles.header)}>
        <p className={css(styles.text)}>{ item.header[lang] }</p>
      </div>
    });

    const inp = formItem.map((item, index) => {
      return <Fragment key={index}>
        <input
          className={css(styles.input)}
          type="text" placeholder={ item.name[lang] } name="Name"
        />
        <input
          className={css(styles.input)}
          type="text" placeholder={ item.email[lang] }
          name="Email"
        />
        <textarea
          className={css(styles.input)}
          placeholder={ item.message[lang] }
          rows='5' name="Message"
        />
      </Fragment>
    });

    return <div className={css(this.props.width, styles.item)}>
      { header }
      { inp }
      <div className={css(styles.btn)}>
        <button className={css(styles.button)}>
          <i className='fab fa-telegram-plane'/>
          <p className={css(styles.btn__text)}>subm</p>
          <p className={css(styles.btn__text_red)}>it</p>
        </button>
      </div>
    </div>
  }
}

export { FormComponent };