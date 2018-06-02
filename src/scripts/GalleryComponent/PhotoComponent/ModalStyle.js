import { StyleSheet } from 'aphrodite/no-important';

import { $Gray, $lightGray, $Red } from "../../../styles/variables";

export default StyleSheet.create({
  modalBg: {
    display: 'flex',
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
    },
    '@media (max-width: 768px)': {
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
    color: $Red
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
    padding: '4px 11px',
    position: 'absolute',
    top: '1%',
    right: '2%',
    cursor: 'pointer',
    color: $Gray,
    fontSize: '1.3rem',
    fontWeight: 500,
    transition: '0.5s',
    ':hover': {
      boxSizing: 'border-box',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: $Red,
      borderRadius: 17,
      color: $lightGray,
      backgroundColor: 'rgba(119,119,119,0.15)',
      transformOrigin: 'center',
      transform: 'rotate(180deg)'
    }
  }
});