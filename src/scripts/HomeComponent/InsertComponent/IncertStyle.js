import { StyleSheet } from 'aphrodite/no-important';

import { $white } from "../../../styles/variables";

export default StyleSheet.create({
  relative: {
    position: 'relative'
  },
  block: {
    boxSizing: 'border-box',
    minHeight: 400,
    opacity: 0.75,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  nameBlock: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: 16,
    color: $white
  }
});