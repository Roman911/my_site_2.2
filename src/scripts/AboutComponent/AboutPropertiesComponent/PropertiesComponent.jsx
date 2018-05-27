import React, { Component, Fragment } from 'react';
import AboutProperties from "./AboutProperties";
import { contentItem } from "../About.config";
import { properties } from "./About.properties";

import { lang } from "../../log/lang";

import {css} from "aphrodite/no-important";
import styles from "./PropertisStyle";

export default class PropertiesComponent extends Component {
  render() {

    const header = contentItem.map((item, index) => {
      return <div key={index} className={css(styles.subtitle)}>
        <p>{item.subtitle[lang]}</p>
      </div>
    });

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
    const valueRetouch = Math.ceil((resultRetouch/arrValueRetouch.length)/5*100);

    const props = properties.map((item, index) => {
      return(
        <AboutProperties
          value={(index === 0 && valuePhoto) || (index === 1 && valueRetouch)}
          key={index}
          header={item.header[lang]}
          properties={item.properties}
          class={item.class}
        />
      )
    });

    return <Fragment>
      { header }
      { props }
    </Fragment>
  }
}