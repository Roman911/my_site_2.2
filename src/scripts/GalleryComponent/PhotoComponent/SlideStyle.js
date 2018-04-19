import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  slide: {
    display: 'none',
    overflow: 'hidden',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  showed: {
    display: 'block'
  },
  img: {
    maxWidth: 'calc(100vh - 50px)',
    maxHeight: 'calc(100vh - 50px)'
  }
});



