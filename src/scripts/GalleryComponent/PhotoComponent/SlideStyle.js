import { StyleSheet } from 'aphrodite/no-important';

import { $Gray, $Red } from "../../../styles/variables";

export default StyleSheet.create({
  slide: {
    display: 'none',
    overflow: 'hidden',
    fontSize: 0
  },
  showed: {
    display: 'block'
  },
  img: {
    maxWidth: 'calc(100vw - 50px)',
    maxHeight: 'calc(100vh - 50px)',
    '@media (max-width: 768px)': {
      opacity: 1
    }
  },
  title: {
    position: 'absolute',
    left: 0,
    width: '100%',
    transition: '0.5s',
    zIndex: 100,
    ':hover': {
      backgroundColor: $Red
    }
  },
  titleSize: {
    margin: 20,
    textAlign: 'start',
    color: $Gray,
    fontSize: '1rem'
  }
});

