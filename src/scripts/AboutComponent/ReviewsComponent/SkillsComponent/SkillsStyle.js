import { StyleSheet } from 'aphrodite/no-important';

import { $Gray, $darkGray, $Red, $Blue } from './../../../../styles/variables'

export default StyleSheet.create({
  contentWrapper: {
    paddingLeft: 15,
    paddingRight: 15
  },
  block: {
    borderTop: '1px solid',
    borderBottom: '1px solid',
    borderColor: $darkGray,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    fontSize: '1.5rem',
    '@media (max-width: 768px)': {
      padding: 5
    }
  },
  p: {
    marginTop: 15,
    marginBottom: 15
  },
  item: {
    marginLeft: 15,
    marginRight: 15,
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      marginLeft: 5,
      marginRight: 5,
    }
  },
  itemNoActive: {
    color: $Gray,
    ':hover': {
      color: $Red
    }
  },
  itemActive: {
    color: $Blue,
    ':hover': {
      color: $Red
    }
  }
});