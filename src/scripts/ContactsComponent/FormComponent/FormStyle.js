import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $Gray, $lightBlack, $Red } from "../../../styles/variables";

export default StyleSheet.create({
  item: {
    boxSizing: 'border-box',
    paddingRight: 20,
    '@media (max-width: 768px)': {
      paddingRight: 0
    }
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
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    padding: '2px 10px',
    backgroundColor: $lightBlack,
    border: 'none',
    cursor: 'pointer',
    boxShadow: `0 0 5px 2px ${$Gray}`,
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
    color: $Red
  }
});