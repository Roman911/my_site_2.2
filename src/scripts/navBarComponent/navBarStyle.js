import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  navBarMob: {
    display: 'none',
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 0 5px 5px rgb(119, 119, 119)',
    zIndex: 1
  },

  showedMob: {
    display: 'block'
  },

  btn: {
    fontSize: '2.5rem',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    color: 'gray'
  },

  navBarList: {
    position: 'absolute',
    backgroundColor: 'rgb(255, 255, 255)',
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
    justifyContent: 'start',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0 0 5px 5px rgb(119, 119, 119)',
    zIndex: 1,
    fontFamily: 'Font Awesome'
  },

  showedDeskTop: {
    display: 'flex'
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
    textAlign: 'center',
    ':hover': {
      backgroundColor: 'rgba(119, 119, 119, 0.2)'
    }
  },

  navBarLinkP: {
    lineHeight: 0,
    marginLeft: 10
  },


});