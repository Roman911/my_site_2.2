import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderPhotoComponent } from "../../GalleryComponent/PhotoComponent/HeaderPhotoComponent/HeaderPhotoComponent";
import { ShowPhotoComponent } from "../../GalleryComponent/PhotoComponent/ShowPhotoComponent";

import { css } from "aphrodite/no-important";
import style from "../../../styles/baseStyle";
import styles from './PortfolioStyle';
import {photoStore} from "../../stores/photo.store";

class PortfolioComponent extends Component {
  state = {
    photo: []
  };

  componentDidMount() {
    photoStore.subscribe('dataChanged', (photo) => {
      this.setState({ photo: photo })
    });
    photoStore.getList();
  }

  render() {

    const img = this.state.photo.filter((item) => {
      let img;
      if (item.showed === true) {
        img = item
      }
      return img
    });

    return <section className={css(style.pageM)}>
      <div className={css(styles.contentWrapper)}>
        <HeaderPhotoComponent />
        <ShowPhotoComponent img={img} />
        <div className={css(styles.btn)}>
          <NavLink to='/gallery'>
            <button className={css(styles.button)}>
              <i className='fas fa-th'/>
              <p className={css(styles.title, styles.titleGray)}>galle</p>
              <p className={css(styles.title, styles.titleRed)}>ry</p>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  }
}

export { PortfolioComponent };