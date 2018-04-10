import React, { Component } from 'react';
import { AboutProperties } from "./AboutProperties";

import {css} from "aphrodite/no-important";
import styles from "./PropertisStyle";
import {contentItem} from "../About.config";
import {properties} from "./About.properties";

class PropertiesComponent extends Component {
  render() {

    const header = contentItem.map((item, index) => {
      return <div key={index} className={css(styles.subtitle)}>
        <p>{item.subtitle[this.props.lang]}</p>
      </div>
    });

    const props = properties.map((item, index) => {
      return(
        <AboutProperties header={item.header[this.props.lang]} properties={item.properties} class={item.class} key={index} />
      )
    });

    return <div>
      { header }
      { props }
    </div>
  }
}

export { PropertiesComponent };