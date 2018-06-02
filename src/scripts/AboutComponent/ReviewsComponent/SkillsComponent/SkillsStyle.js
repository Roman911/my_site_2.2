import { StyleSheet } from 'aphrodite/no-important';

import { $Gray, $darkGray, $Red, $Blue } from './../../../../styles/variables'

export default StyleSheet.create({
  contentWrapper: {
    padding: '0 15px'
  },
  block: {
    borderTop: `1px solid ${$darkGray}`,
    borderBottom: `1px solid ${$darkGray}`,
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
    margin: '15px 0'
  },
  item: {
    margin: '0 15px',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      margin: '0 5px'
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