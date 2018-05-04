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
    marginBottom: 10,
    paddingBottom: 7,
    boxShadow: '0 0 5px 1px #929292',
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
  },
  windowTaskMob: {
    position: 'fixed',
    bottom: '10%',
    left: '-43px',
    transform: 'rotate(270deg)',
    zIndex: 2
  },
  contentWrapperMob: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'white',
    transition: '0.5s'
  }
});

