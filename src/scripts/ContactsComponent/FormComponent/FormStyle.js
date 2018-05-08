import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $lightBlack } from "../../../styles/variables";

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
    backgroundColor: $lightBlack,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 5px 2px #777',
    color: $lightGray,
    fontSize: '1rem'
  },
  btn__text: {
    display: 'inline',
    color: $lightGray,
    marginLeft: 15
  },
  btn__text_red: {
    display: 'inline',
    color: 'red'
  }
});