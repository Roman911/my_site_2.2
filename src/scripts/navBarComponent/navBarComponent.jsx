import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { navBarItems } from './navBar.config.js';

import { css } from 'aphrodite/no-important';
import styles from './navBarStyle'

class NavBarComponent extends Component {

  render() {
    let lang;
    const languageBrowser = navigator.language;
    if (languageBrowser === 'uk-UA' || languageBrowser === 'uk') {
      lang = 0;
    } else if (languageBrowser === 'ru-RU' || languageBrowser === 'ru') {
      lang = 1;
    } else {
      lang = 2;
    }
    const links = navBarItems.map((item, index) => {
      return <NavLink
        key={index}
        className={css(styles.navBarLink)}
        to={item.route}><i className={item.class}/>
        <p className={css(styles.navBarLinkP)}>
          {item.title[lang]}
        </p>
      </NavLink>;
    });
    return <nav>
      <div className={css(styles.navBarMob)}>
        <div className='navbar-mob__btn'>
          <i className='fas fa-arrow-circle-right'/>
          <p>menu</p>
        </div>
        <div className='navbar-mob__list'>
          {links}
        </div>
      </div>
      <div className={css(styles.navBarDiscTop)}>
        {links}
      </div>
    </nav>
  }
}

export { NavBarComponent };