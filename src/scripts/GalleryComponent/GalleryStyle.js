import { StyleSheet } from 'aphrodite/no-important';

import { $white, $Gray, $lightGray3 } from "../../styles/variables";

export default StyleSheet.create({
  gallery: {
    boxSizing: 'border-box',
    minHeight: '75vh',
    display: 'flex'
  },
  contentWrapper: {
    width: 250,
    padding: '0 5px'
  },
  windowTask: {
    boxSizing: 'border-box',
    marginBottom: 10,
    paddingBottom: 7,
    boxShadow: `0 0 5px 1px ${$lightGray3}`
  },
  windowHeader: {
    boxSizing: 'border-box',
    padding: '10px 25px',
    backgroundColor: $Gray
  },
  text: {
    color: $white,
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
    backgroundColor: $white,
    transition: '0.5s'
  }
});

