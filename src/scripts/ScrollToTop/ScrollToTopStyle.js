import { StyleSheet } from 'aphrodite/no-important';

import { $lightBlack, $darkGray, $Red } from "../../styles/variables";

export default StyleSheet.create({
  scroll: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 20,
    padding: '7px 15px',
    border: 'none',
    borderRadius: 5,
    backgroundColor: $lightBlack,
    boxShadow: `0px 0px 8px 0px ${$darkGray}`,
    cursor: 'pointer',
    transition: '0.5s',
    ':hover': {
      boxShadow: `0px 0px 5px 3px ${$darkGray}`
    }
  },
  icon: {
    color: $Red,
    fontSize: '1.2rem'
  }
});