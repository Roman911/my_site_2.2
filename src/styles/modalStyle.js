import { StyleSheet } from 'aphrodite/no-important';

import { $darkWhite, $darkGray, $lightBlack, $lightGray, $Gray, $Red } from './variables';

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
  modal: {
    backgroundColor: $darkWhite,
    border: '2px solid',
    borderColor: $darkGray,
    boxShadow: '0 0 10px 4px #d6d6d6',
    width: 500,
    maxHeight: '100%',
    '@media (max-width: 768px)': {
      maxWidth: 'calc(100vw - 50px)'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
    borderBottom: '2px solid',
    borderBottomColor: $darkGray,
    '@media (max-width: 768px)': {
      margin: 5
    }
  },
  h4: {
    marginLeft: 10
  },
  h5: {
    marginLeft: 15,
    color: $darkGray
  },
  headerPhoto: {
    marginLeft: 15
  },
  btn: {
    padding: 25,
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      padding: 10
    }
  },
  button: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: $lightBlack,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 5px 2px #777',
    color: $lightGray,
    fontSize: '1.1rem'
  },
  btn__text: {
    display: 'inline',
    color: $lightGray,
    marginLeft: 15
  },
  btn__text_red: {
    display: 'inline',
    color: 'red'
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
  },
  feedbackWrapper: {
    padding: '15px 10px',
    borderBottom: '1px solid',
    borderColor: $Gray
  }
});