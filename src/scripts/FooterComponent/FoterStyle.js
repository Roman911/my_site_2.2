import { StyleSheet } from 'aphrodite/no-important';

const grey = '#777';
const darkGrey = '#3b3b3b';

export default StyleSheet.create({
  footer: {
    boxSizing: 'border-box'
  },
  contentWrapper: {
    paddingTop: 64,
    paddingBottom: 64,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: grey,
    transition: '0.5s',
    ':hover': {
      backgroundColor: darkGrey,
      transition: '0.5s'
    }
  },
  item: {
    textAlign: 'center'
  },
  date: {
    marginTop: 30,
    textAlign: 'center'
  },
  text: {
    color: 'white'
  }
});