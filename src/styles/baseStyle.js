import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  pageWrapper: {
    boxSizing: 'border-box'
  },
  pageM: {
    margin: '0 auto',
    height: '100%',
    maxWidth: 992,
    width: '100%'
  },
  pageL: {
    paddingTop: 64,
    paddingBottom: 64,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 'auto',
    height: '100%',
    maxWidth: 1220
  }
});