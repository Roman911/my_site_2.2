import { StyleSheet } from 'aphrodite/no-important';

import {$lightBlack, $lightGray, $Gray, $Red} from "../../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    boxSizing: 'border-box',
    paddingTop: 63,
    paddingBottom: 63,
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid',
    borderBottomColor: $Red,
    paddingBottom: 15
  },
  head: {
    display: 'flex',
    alignItems: 'center'
  },
  h3: {
    marginLeft: 10,
    fontSize: '1.7rem',
    '@media (max-width: 768px)': {
      fontSize: '1.4rem'
    }
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: $lightBlack,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 5px 2px #777',
    color: $lightGray,
    fontSize: '1rem',
    '@media (max-width: 768px)': {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: '0.8rem'
    }
  },
  btn__text: {
    display: 'inline',
    color: $lightGray,
    marginRight: 15
  },
  reviewWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: '1px solid',
    borderColor: $Gray
  }
});