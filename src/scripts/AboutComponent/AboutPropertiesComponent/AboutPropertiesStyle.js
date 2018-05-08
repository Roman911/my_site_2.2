import { StyleSheet } from 'aphrodite/no-important';

import { $white, $lightGray, $Gray, $darkGray } from "../../../styles/variables";

export default StyleSheet.create({
  block: {
    paddingLeft: 16,
    paddingRight: 16
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    color: $Gray
  },
  text: {
    padding: 16,
    letterSpacing: 14
  },
  bar: {
    width: '100%',
    backgroundColor: $lightGray
  },
  rate: {
    backgroundColor: $darkGray
  },
  textRate: {
    padding: 10,
    textAlign: 'center',
    color: $white
  }
});