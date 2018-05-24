import { StyleSheet } from 'aphrodite/no-important';

import {$lightBlack, $lightGray, $Red} from "../../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    boxSizing: 'border-box',
    paddingTop: 63,
    paddingBottom: 63
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
  h1: {
    marginLeft: 10
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
    fontSize: '1rem'
  },
  btn__text: {
    display: 'inline',
    color: $lightGray,
    marginRight: 15
  }
});