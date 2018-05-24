import React, { Component } from 'react';
//import styles from "../../../ControlWindow/CategoriesComponent/CategoriesStyle";

export default class SkillsComponent extends Component {

  render() {

    const styleLine = this.props.showed ? {color: 'red'} : {color: 'Gray'};

    return <div style={styleLine}>
      <i className={this.props.class}/>
    </div>
  }
}