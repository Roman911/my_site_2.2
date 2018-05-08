import { StyleSheet } from 'aphrodite/no-important';

import { $lightBlack, $Red } from "../../styles/variables";

export default StyleSheet.create({
  scroll: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 20,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    border: 'none',
    borderRadius: 5,
    backgroundColor: $lightBlack,
    boxShadow: '0px 0px 8px 0px rgb(95, 95, 95)',
    cursor: 'pointer',
    transition: '0.5s',
    ':hover': {
      boxShadow: '0px 0px 5px 3px rgb(95, 95, 95)'
    }
  },
  icon: {
    color: $Red,
    fontSize: '1.2rem'
  }
});