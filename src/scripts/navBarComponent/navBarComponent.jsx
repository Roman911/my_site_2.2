import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { navBarItems } from './navBar.config.js';

import { css } from 'aphrodite/no-important';
import styles from './navBarStyle'

class NavBarComponent extends Component {
  constructor() {
    super();
    this.state = {
      showed: false
    }
  }

  handleClick() {
    this.setState({showed: !this.state.showed});
    if (this.state.showed === true) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  removeClick() {
    this.setState({showed: false});
    document.body.style.overflow = '';
  }

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

    const mathMedia = window.matchMedia("(max-width: 768px)").matches;

    const a = mathMedia ? styles.a : '';
    const paragraph = mathMedia ? styles.p : '';

    const links = navBarItems.map((item, index) => {
      return <NavLink
        onClick={() => this.removeClick()}
        key={index}
        className={css(styles.navBarLink, a)}
        to={item.route}><i className={item.class}
      />
        <p className={css(styles.navBarLinkP, paragraph)}>
          {item.title[lang]}
        </p>
      </NavLink>;
    });

    let showed_mob;
    let showed_deskTop;
    if (mathMedia) {
      showed_mob = styles.showedMob;
      showed_deskTop = ''
    } else {
      showed_mob = '';
      showed_deskTop = styles.showedDeskTop
    }

    const showed = this.state.showed ? styles.nBLShowed : '';

    return <Fragment>
      <div className={css(styles.navBarMob, showed_mob)}>
        <div className={css(styles.btn)} onClick={() => this.handleClick()}>
          <i className='fab fa-buromobelexperte'/>
        </div>
        <div className={css(styles.navBarList, showed)}>
          {links}
        </div>
      </div>
      <div className={css(styles.navBarDeskTop, showed_deskTop)}>
        {links}
      </div>
    </Fragment>
  }
}

export { NavBarComponent };