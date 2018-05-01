import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  contentWrapper: {
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
  btn: {
    marginTop: 45,
    marginBottom: 25
  },
  button: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#242424',
    border: 'none',
    fontSize: '1.4rem',
    cursor: 'pointer',
    transaction: '0.5s',
    boxShadow: '0 0 5px 2px #777',
    color: '#e4e4e4'
  },
  title: {
    display: 'inline'
  },
  titleGray: {
    marginLeft: 15,
    color: '#e4e4e4'
  },
  titleRed: {
    color: 'red'
  }
});