import { StyleSheet } from 'aphrodite/no-important';

import { $white, $Gray } from "../../styles/variables";

const translateKeyframes = {
  '0%': {
    transform: 'translateY(-100%)',
  },

  '100%': {
    transform: 'translateY(0)',
  },
};

export default StyleSheet.create({
  navBarMob: {
    display: 'none',
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: `0 0 5px 5px ${$Gray}`,
    zIndex: 1
  },

  showedMob: {
    display: 'block'
  },

  btn: {
    fontSize: '2.5rem',
    margin: '10px 0 10px 20px',
    color: $Gray
  },

  navBarList: {
    position: 'absolute',
    backgroundColor: $white,
    width: '100%',
    transform: 'scaleY(0)',
    transformOrigin: 'top',
    transition: '0.5s'
  },

  nBLShowed: {
    transform: 'scaleY(1)'
  },

  a: {
    justifyContent: 'center',
    fontSize: '2rem'
  },

  p: {
    lineHeight: '1.8'
  },

  navBarDeskTop: {
    display: 'none',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: `0 0 5px 5px ${$Gray}`,
    zIndex: 1,
    fontFamily: 'Font Awesome'
  },

  showedDeskTop: {
    display: 'flex'
  },

  navBarMenu: {
    display: 'flex',
    justifyContent: 'start',
  },

  navBarUser: {
    display: 'flex',
    alignItems: 'center'
  },

  navBarLinkUser: {
    height: '100%',
    padding: '0 1rem',
    cursor: 'pointer'
  },

  navBarLink: {
    padding: '0.8rem 1.8rem',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: $Gray,
    textAlign: 'center',
    ':hover': {
      backgroundColor: 'rgba(119, 119, 119, 0.2)'
    }
  },

  navBarLinkP: {
    lineHeight: 0,
    marginLeft: 10
  },
  fixed: {
    position: 'fixed',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    animationName: translateKeyframes,
    animationDuration: '0.5s',
  }

});