import React from 'react';

import { css } from 'aphrodite/no-important';
import styles from './FooterLinksStyle';

export default function FooterLinks({href, target, classN}) {
  return <a
    className={css(styles.link)}
    href={href}
    target={target}
  >
    <span className={css(styles.icon)}>
      <i className={classN}/>
    </span>
  </a>
}