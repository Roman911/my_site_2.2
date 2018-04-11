import { StyleSheet } from 'aphrodite/no-important';

const darkGray = '#4d4d4d';

export default StyleSheet.create({
  bar: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: darkGray
  },
  item: {
    padding: 24
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  subtitle: {
    margin: 9,
    fontWeight: 100
  }
});