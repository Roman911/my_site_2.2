import { StyleSheet } from 'aphrodite/no-important';

import {$white, $Gray} from "../../../styles/variables";

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
    border: '1px solid #e45242',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: $Gray,
    '@media (max-width: 768px)': {
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 40,
      paddingRight: 40,
      minWidth: 200
    }
  },
  text: {
    textAlign: 'center',
    color: $white
  },
});