import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  item: {
    overflow: 'hidden',
    boxSizing: 'border-box',
    margin: '4px 2px',
    cursor: 'pointer',
    fontSize: 0
  },
  img: {
    maxWidth: '100%',
    boxSizing: 'border-box',
    opacity: 0.75,
    transition: '0.5s',
    ':hover': {
      opacity: 1,
      transform: 'scale(1.07, 1.07)'
    }
  }
});