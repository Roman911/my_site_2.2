import React, { Component, Fragment } from 'react';
import AboutProperties from "./AboutProperties";
import { subtitle } from "../About.variables";
import { properties } from "./About.properties";

import { lang } from "../../log/lang";

import { css } from "aphrodite/no-important";
import styles from "./PropertisStyle";

export default class PropertiesComponent extends Component {
  render() {

    const review = this.props.review;

    const arrValuePhoto = review.map((item) => {
      return item.currentIndexPhoto
    });

    const arrValueRetouch = review.map((item) => {
      return item.currentIndexRetouch
    });

    let resultPhoto = arrValuePhoto.reduce(function(sum, current) {
      return sum + current;
    }, 0);

    let resultRetouch = arrValueRetouch.reduce(function(sum, current) {
      return sum + current;
    }, 0);

    const valuePhoto = Math.ceil((resultPhoto/arrValuePhoto.length)/5*100);
    const widthPhoto = {width: valuePhoto + '%'};

    const valueRetouch = Math.ceil((resultRetouch/arrValueRetouch.length)/5*100);
    const widthRetouch = {width: valueRetouch + '%'};

    const props = properties.map((item, index) => {
      return(
        <AboutProperties
          key={index}
          value={(index === 0 && valuePhoto) || (index === 1 && valueRetouch)}
          width={(index === 0 && widthPhoto) || (index === 1 && widthRetouch)}
          header={item.header[lang]}
          properties={item.properties}
          className={item.class}
        />
      )
    });

    return <Fragment>
      <div className={css(styles.subtitle)}>
        <p>{subtitle[lang]}</p>
      </div>
      { props }
    </Fragment>
  }
}