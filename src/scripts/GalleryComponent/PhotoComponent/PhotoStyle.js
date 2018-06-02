import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray2 } from "../../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    border: `1px solid ${$lightGray2}`,
    margin: '0 5px',
    textAlign: 'center',
    boxShadow: `0 0 5px 1px ${$lightGray2}`
  },
  header: {
    margin: 10,
    fontWeight: 100
  },
  text: {
    fontStyle: 'italic',
    fontWeight: 100,
    writeSpace: 'pre-line'
  },
  marginTop: {
    marginTop: 15
  },
  marginBottom: {
    marginBottom: 15
  }
});