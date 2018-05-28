import React, { Fragment } from 'react';
import DateTime from './../DataTime/DataTime';

import { css } from 'aphrodite/no-important';
import styles from './../../styles/ConclusionReviewsStyle';

export default function ConclusionReviewsComponent({name, date, email, text}) {

  return <Fragment>
    <div className={css(styles.header)}>
      <h5 className={css(styles.name)}>{ name }</h5>
      <div className={css(styles.icon)}>
        <i className='fas fa-circle'/>
      </div>
      <div className={css(styles.date)}>
        <DateTime value={ date } format='DD MMMM YYYY'/>
      </div>
    </div>
    <p>{ email }</p>
    <p>{ text }</p>
  </Fragment>
}