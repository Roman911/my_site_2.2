import { StyleSheet } from 'aphrodite/no-important';

import { $white, $Gray, $darkGray } from "../../styles/variables";

export default StyleSheet.create({
  footer: {
    boxSizing: 'border-box'
  },
  contentWrapper: {
    padding: '64px 0',
    backgroundColor: $Gray,
    transition: '0.5s',
    ':hover': {
      backgroundColor: $darkGray,
      transition: '0.5s'
    }
  },
  item: {
    textAlign: 'center'
  },
  date: {
    marginTop: 30,
    textAlign: 'center'
  },
  text: {
    color: $white
  }
});