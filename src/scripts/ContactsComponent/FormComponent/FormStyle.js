import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  item: {
    boxSizing: 'border-box',
    paddingRight: 20
  },
  header: {
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontStyle: 'italic'
  },
  input: {
    boxSizing: 'border-box',
    marginBottom: 15,
    padding: 5,
    width: '100%'
  },
  btn: {
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#242424',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 5px 2px #777',
    color: '#e4e4e4',
    fontSize: '1rem'
  },
  btn__text: {
    display: 'inline',
    color: '#e4e4e4',
    marginLeft: 15
  },
  btn__text_red: {
    display: 'inline',
    color: 'red'
  }
});