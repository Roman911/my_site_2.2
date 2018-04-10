import React, { Component } from 'react'
import {HeaderComponent} from "./HeaderComponent/HeaderComponent";
import {AboutComponent} from "../AboutComponent/AboutComponent";

class HomeComponent extends Component {

  render() {
    return <div>
      <HeaderComponent />
      <AboutComponent />
    </div>
  }
}

export { HomeComponent };