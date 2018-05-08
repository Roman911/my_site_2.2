import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray } from "../../styles/variables";

export default StyleSheet.create({
  contentWrapper: {
    boxSizing: 'border-box',
    paddingTop: 63,
    paddingBottom: 63,
    margin: 'auto'
  },
  border: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: $lightGray,
    boxShadow: '0 0 5px 1px #929292'
  },
  header: {
    marginTop: 25,
    marginBottom: 25,
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
    padding: 40
  }
});

