import React, { Component } from 'react';
import { reviewsModalItem } from "../reviewsModal.config";
import { skillsItem } from "./skills.config";
import SkillsPhotoComponent from './SkillsPhotoComponent';

import {lang} from "../../../log/lang";

import { css } from 'aphrodite/no-important';
import styles from './SkillsStyle';

export default class SkillsComponent extends Component {

  handleClickPhoto(index) {
    this.props.onAddCIPhoto(index)
  }

  handleClickRetouch(index) {
    this.props.onAddCIRetouch(index)
  }

  render() {

    const subtitle = reviewsModalItem.map((item, index) => {
      return <h5 key={index}>{ item.subtitle[lang] }</h5>
    });

    const headPhoto = reviewsModalItem.map((item, index) => {
      return <p key={index} className={css(styles.p)}>{ item.headerPhoto[lang] }</p>
    });

    const headRetouch = reviewsModalItem.map((item, index) => {
      return <p key={index} className={css(styles.p)}>{ item.headerRetouch[lang] }</p>
    });

    const skillsPhoto = skillsItem.map((item, index) => {
      return <div key={index} onClick={() => this.handleClickPhoto(index)}>
        <SkillsPhotoComponent
          StarR={item.StarR}
          StarS={item.StarS}
          showed={this.props.currentIndexPhoto >= index}
        />
      </div>
    });

    const skillsRetouch = skillsItem.map((item, index) => {
      return <div key={index} onClick={() => this.handleClickRetouch(index)}>
        <SkillsPhotoComponent
          StarR={item.StarR}
          StarS={item.StarS}
          showed={this.props.currentIndexRetouch >= index}
        />
      </div>
    });

    return <div className={css(styles.contentWrapper)} >
      { subtitle }
      { headPhoto }
      <div className={css(styles.block)}>
        <i className='far fa-thumbs-down'/>
        { skillsPhoto }
        <i className='far fa-thumbs-up'/>
      </div>
      { headRetouch }
      <div className={css(styles.block)}>
        <i className='far fa-thumbs-down'/>
        { skillsRetouch }
        <i className='far fa-thumbs-up'/>
      </div>
    </div>
  }
}