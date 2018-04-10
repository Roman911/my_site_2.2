import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  content: {
    padding: 16,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    maxWidth: '100%',
    borderRadius: '6px',
    opacity: 0.7,
    transition: '0.5s',
    ':hover': {
      opacity: 1,
      transition: '0.5s',
    }
  },
  text: {
    textAlign: 'center'
  }
});