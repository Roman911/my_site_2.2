import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './SkillsStyle';

export default class SkillsPhotoComponent extends Component {

  render() {

    const style = this.props.showed ? styles.itemActive : styles.itemNoActive;
    const star = this.props.showed ? this.props.StarS : this.props.StarR;

    return <div className={css(styles.item, style)}>
      <i className={star}/>
    </div>
  }
}