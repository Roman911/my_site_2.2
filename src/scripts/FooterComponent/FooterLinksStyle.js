import { StyleSheet } from 'aphrodite/no-important';

const Gray = '#a0a0a0';

export default StyleSheet.create({
  link: {
    margin: 15
  },
  icon: {
    color: 'white',
    fontSize: '1.8rem',
    margin: 5,
    transition: '0.4s',
    ':hover': {
      color: Gray,
      transition: '0.4s'
    }
  }
});