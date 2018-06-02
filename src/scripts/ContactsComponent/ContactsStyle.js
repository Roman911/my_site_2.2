import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $lightGray3 } from "../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    boxSizing: 'border-box',
    padding: '63px 0',
    margin: 'auto'
  },
  border: {
    border: `1px solid ${$lightGray}`,
    boxShadow: `0 0 5px 1px ${$lightGray3}`
  },
  borderNone: {
    border: 'none'
  },
  header: {
    margin: '25px 0',
    textAlign: 'center'
  },
  headerText: {
    fontSize: '1.8rem',
    fontWeight: 100,
    textTransform: 'uppercase'
  },
  subtitle: {
    fontStyle: 'italic'
  },
  fontSize: {
    fontSize: 0
  },
  img: {
    width: '100%',
    opacity: '0.75'
  },
  item: {
    boxSizing: 'border-box',
    padding: 40,
    '@media (max-width: 768px)': {
      padding: 10,
    }
  }
});