import React, { Component } from 'react';
import { reviewSubtitle, headerPhoto, headerRetouch } from './../../About.variables';
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
      <h5>{ reviewSubtitle[lang] }</h5>
      <p className={css(styles.p)}>{ headerPhoto[lang] }</p>
      <div className={css(styles.block)}>
        <i className='far fa-thumbs-down'/>
        { skillsPhoto }
        <i className='far fa-thumbs-up'/>
      </div>
      <p className={css(styles.p)}>{ headerRetouch[lang] }</p>
      <div className={css(styles.block)}>
        <i className='far fa-thumbs-down'/>
        { skillsRetouch }
        <i className='far fa-thumbs-up'/>
      </div>
    </div>
  }
}