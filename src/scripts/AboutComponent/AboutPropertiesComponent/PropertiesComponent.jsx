import React, { Component } from 'react';
import { AboutProperties } from "./AboutProperties";
import { contentItem } from "../About.config";
import { properties } from "./About.properties";

import { lang } from "../../log/lang";

import {css} from "aphrodite/no-important";
import styles from "./PropertisStyle";

class PropertiesComponent extends Component {
  render() {

    const header = contentItem.map((item, index) => {
      return <div key={index} className={css(styles.subtitle)}>
        <p>{item.subtitle[lang]}</p>
      </div>
    });

    const props = properties.map((item, index) => {
      return(
        <AboutProperties
          key={index}
          header={item.header[lang]}
          properties={item.properties}
          class={item.class}
        />
      )
    });

    return <div>
      { header }
      { props }
    </div>
  }
}

export { PropertiesComponent };