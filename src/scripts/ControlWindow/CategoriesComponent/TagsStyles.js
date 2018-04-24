import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  btn: {
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#f1f1f1',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 6,
    paddingRight: 6,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#d6d6d6'
    }
  },
  btnActive: {
    backgroundColor: '#3b3b3b',
    transform: 'scale(1.12)',
    ':hover': {
      backgroundColor: '#3b3b3b'
    }
  },
  btnText: {
    fontWeight: 500,
    color: 'red'
  }
});