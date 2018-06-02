import { StyleSheet } from 'aphrodite/no-important';

import {$lightBlack, $lightGray, $Gray, $Red} from "../../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    boxSizing: 'border-box',
    padding: '63px 10px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `2px solid ${$Red}`,
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
    padding: '7px 20px',
    backgroundColor: $lightBlack,
    border: 'none',
    cursor: 'pointer',
    boxShadow: `0 0 5px 2px ${$Gray}`,
    color: $lightGray,
    fontSize: '1rem',
    '@media (max-width: 768px)': {
      padding: '5px 10px',
      fontSize: '0.8rem'
    }
  },
  btn__text: {
    display: 'inline',
    color: $lightGray,
    marginRight: 15
  },
  reviewWrapper: {
    padding: '15px 0',
    borderBottom: `1px solid ${$Gray}`
  }
});