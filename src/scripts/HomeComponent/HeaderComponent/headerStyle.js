import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  header: {
    boxSizing: 'border-box',
    height: '100vh',
    width: '100%',
    opacity: 0.75,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  logo: {
    position: 'absolute',
    top: '85%',
    left: '50%',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '30px',
    paddingRight: '30px',
    backgroundColor: '#0c0c0c',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    boxShadow: '0 0 8px 3px #5f5f5f'
  },
  red: {
    color: 'red'
  }
});