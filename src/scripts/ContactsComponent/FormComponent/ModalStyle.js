import { StyleSheet } from 'aphrodite/no-important';

import {$white, $Gray, $Red} from "../../../styles/variables";

export default StyleSheet.create({
  bgWindow: {
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: `1px solid ${$Red}`,
    padding: `50px 100px`,
    backgroundColor: $Gray,
    '@media (max-width: 768px)': {
      padding: `25px 40px`,
      minWidth: 200
    }
  },
  text: {
    textAlign: 'center',
    color: $white
  },
});