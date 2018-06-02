import { StyleSheet } from 'aphrodite/no-important';

import { $darkWhite, $Gray, $lightBlack, $Red } from "../../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    margin: '0 5px',
    textAlign: 'center',
  },
  btn: {
    margin: '45px 0 25px'
  },
  button: {
    padding: '4px 30px',
    backgroundColor: $lightBlack,
    border: 'none',
    fontSize: '1.4rem',
    cursor: 'pointer',
    transaction: '0.5s',
    boxShadow: `0 0 5px 2px ${$Gray}`,
    color: $darkWhite
  },
  title: {
    display: 'inline'
  },
  titleGray: {
    marginLeft: 15,
    color: $darkWhite
  },
  titleRed: {
    color: $Red
  }
});