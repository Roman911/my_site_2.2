import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray2 } from "../../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    border: '1px solid #a0a0a0',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: $lightGray2,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    boxShadow: '0 0 5px 1px #a0a0a0'
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