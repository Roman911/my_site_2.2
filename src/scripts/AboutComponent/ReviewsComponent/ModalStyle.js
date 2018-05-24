import { StyleSheet } from 'aphrodite/no-important';

import { $darkWhite, $darkGray } from './../../../styles/variables';

export default StyleSheet.create({
  modalBg: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: $darkWhite,
    border: '2px solid',
    borderColor: $darkGray,
    boxShadow: '0 0 10px 4px #d6d6d6',
    // maxWidth: 'calc(100vw - 50px)',
    // maxHeight: 'calc(100vh - 50px)',
    width: 500,
    height: 300
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
    borderBottom: '2px solid',
    borderBottomColor: $darkGray
  },
  h4: {
    marginLeft: 10
  },
  h5: {
    marginLeft: 15,
    color: $darkGray
  },
  headerPhoto: {
    marginLeft: 15
  }
});