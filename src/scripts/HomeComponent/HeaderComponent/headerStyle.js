import { StyleSheet } from 'aphrodite/no-important';

import { $lightBlack, $darkGray, $Red } from "../../../styles/variables";

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
    padding: '2px 30px',
    backgroundColor: $lightBlack,
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    boxShadow: `0 0 8px 3px ${$darkGray}`
  },
  red: {
    color: $Red
  }
});