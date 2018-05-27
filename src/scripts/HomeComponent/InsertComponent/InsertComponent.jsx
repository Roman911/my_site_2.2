import React from 'react';

import { css } from 'aphrodite/no-important';
import styles from './IncertStyle'

export default function InsertComponent({name, background}) {

  return <section style={background} className={css(styles.relative, styles.block)}>
    <div className={css(styles.nameBlock)}>
      <h2 className={css(styles.text)}>{ name }</h2>
    </div>
  </section>
}