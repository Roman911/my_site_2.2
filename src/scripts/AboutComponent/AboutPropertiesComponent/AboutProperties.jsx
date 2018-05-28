import React from 'react';

import { css } from 'aphrodite/no-important';
import styles from './AboutPropertiesStyle';

export default function AboutProperties({value, width, header, properties, className}) {
  return <div className={css(styles.block)}>
    <div className={css(styles.header)}>
      <i className={className}/>
      <p className={css(styles.text)}>{header}</p>
    </div>
    <div className={css(styles.bar)}>
      <div style={ width } className={css(styles.rate)}>
        <p className={css(styles.textRate)}>{ value }%</p>
      </div>
    </div>
  </div>
}