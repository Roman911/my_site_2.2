import { StyleSheet } from 'aphrodite/no-important';

import { $darkWhite, $lightGray, $darkGray, $Red } from "../../../styles/variables";

export default StyleSheet.create({
  btn: {
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: $darkWhite,
    padding: '0 6px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: $lightGray
    }
  },
  btnActive: {
    backgroundColor: $darkGray,
    transform: 'scale(1.12)',
    ':hover': {
      backgroundColor: $darkGray
    }
  },
  btnText: {
    fontWeight: 500,
    color: $Red
  }
});