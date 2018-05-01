import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  modalBg: {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  showed: {
    display: 'flex',
  },
  relative: {
    position: 'relative'
  },
  btnOpacity: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    opacity: 0,
    transition: '0.5s',
    ':hover': {
      opacity: 1
    }
  },
  btn: {
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '100%',
    width: '40%',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '3rem',
    color: 'rgba(255, 255, 255, 0.45)',
    display: 'flex',
    padding: 20,
    ':hover': {
      color: 'rgba(255, 255, 255, 0.75)',
    }
  },
  btnIcon: {
    color: 'red'
  },
  btnNext: {
    right: 0,
    justifyContent: 'flex-end'
  },
  btnPrev: {
    left: 0,
    justifyContent: 'flex-start'
  },
  btnRemove: {
    boxSizing: 'border-box',
    background: 'none',
    border: '1px solid rgba(0, 0, 0, 0)',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 11,
    paddingLeft: 11,
    position: 'absolute',
    top: '1%',
    right: '2%',
    cursor: 'pointer',
    color: '#777',
    fontSize: '1.3rem',
    fontWeight: 500,
    transition: '0.5s',
    ':hover': {
      boxSizing: 'border-box',
      border: '1px solid red',
      borderRadius: 17,
      color: '#adadad',
      backgroundColor: 'rgba(119,119,119,0.15)',
      transformOrigin: 'center',
      transform: 'rotate(180deg)'
    }
  }
});