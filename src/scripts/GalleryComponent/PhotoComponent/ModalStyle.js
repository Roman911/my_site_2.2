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
  btnNextPrev: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    height: '100%'
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