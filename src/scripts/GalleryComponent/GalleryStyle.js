import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  gallery: {
    boxSizing: 'border-box',
    minHeight: '75vh',
    display: 'flex'
  },
  contentWrapper: {
    width: 250,
    paddingLeft: 5,
    paddingRight: 5
  },
  windowTask: {
    boxSizing: 'border-box',
    border: '1px solid #a0a0a0',
    boxShadow: '0 0 5px 1px #929292',
    marginBottom: 10,
    paddingBottom: 7
  },
  windowHeader: {
    boxSizing: 'border-box',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#777'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  tags: {
    margin: 4,
    display: 'flex'
  }
});

