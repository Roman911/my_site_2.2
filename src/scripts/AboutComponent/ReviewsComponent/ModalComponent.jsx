import React, { Component } from 'react';
import { reviewsModalItem } from "./reviewsModal.config";
import SkillsComponent from "./SkillsComponent/SkillsComponent";

import { lang } from "../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './ModalStyle';
//import {skillsItem} from "./SkillsComponent/skills.config";

export default class ModalComponent extends Component {
  state = {
    currentIndexPhoto: null
  };

  handleClick(index) {
    this.setState({ currentIndexPhoto: index })
  }

  render() {

    const header = reviewsModalItem.map((item, index) => {
      return <div key={index} className={css(styles.header)}>
        <i style={{fontSize: '1.3rem'}} className='far fa-comments'/>
        <h4 className={css(styles.h4)}>{ item.header[lang] }</h4>
      </div>
    });

    const subtitle = reviewsModalItem.map((item, index) => {
      return <h5 key={index} className={css(styles.h5)}>{ item.subtitle[lang] }</h5>
    });

    return <div className={css(styles.modalBg)}>
      <div className={css(styles.modal)}>
        { header }
        { subtitle }
      </div>
    </div>
  }
}