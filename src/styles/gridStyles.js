import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  gridContainer: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '100%'
  },
  width100: {
    maxWidth: '100%',
    flexBasis: '100%'
  },
  width66: {
    maxWidth: '66.666666%',
    flexBasis: '66.666666%'
  },
  width50: {
    maxWidth: '50%',
    flexBasis: '50%'
  },
  width33: {
    maxWidth: '33.333333%',
    flexBasis: '33.333333%'
  },
  width25: {
    maxWidth: '25%',
    flexBasis: '25%'
  }
});