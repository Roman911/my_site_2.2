import { StyleSheet } from 'aphrodite/no-important';

import { $Red } from "../../../styles/variables";

export default StyleSheet.create({
  item: {
    boxSizing: 'border-box',
    paddingLeft: 20
  },
  header: {
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontStyle: 'italic'
  },
  links: {
    marginTop: 10,
    marginBottom: 10
  },
  span: {
    margin: 5
  },
  hover: {
    ':hover': {
      color: $Red
    }
  }
});