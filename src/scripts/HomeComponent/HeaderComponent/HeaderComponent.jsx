import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './headerStyle'

class HeaderComponent extends Component {

  render() {
    let img;
    if (window.matchMedia("(max-width: 768px)").matches) {
      img = {backgroundImage: 'url("./assets/photo_m_002.jpg")'};
    } else {
      img = {backgroundImage: 'url("./assets/photo_002.jpg")'};
    }

    return <section style={img} className={css(styles.header)} id="navHome">
      <div className={css(styles.logo)}>
        <h3>ROMA_</h3><h3 className={css(styles.red)}>LI</h3>
      </div>
    </section>;
  }
}

export { HeaderComponent }