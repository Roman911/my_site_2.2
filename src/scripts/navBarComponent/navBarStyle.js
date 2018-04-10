import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  navBarMob: {
    display: 'none'
  },

  navBarDiscTop: {
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 0 5px 5px rgb(119, 119, 119)',
    zIndex: 1,
    fontFamily: 'Font Awesome'
  },

  navBarLink: {
    paddingTop: '0.8rem',
    paddingBottom: '0.8rem',
    paddingLeft: '1.8rem',
    paddingRight: '1.8rem',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: 'rgb(119, 119, 119)',
    ':hover': {
      backgroundColor: 'rgba(119, 119, 119, 0.2)'
    }
  },

  navBarLinkP: {
    lineHeight: 0,
    marginLeft: 10
  },


});