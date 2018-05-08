import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray } from "../../../styles/variables";

export default StyleSheet.create({
  description: {
    display: 'none',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  showed: {
    display: 'flex'
  },
  header: {
    background: 'linear-gradient(to bottom, rgb(24, 24, 24) 0%, rgba(48,48,48, 0) 100%)'
  },
  footer: {
    background: 'linear-gradient(to top, rgb(24, 24, 24) 0%, rgba(48,48,48, 0) 100%)'
  },
  text: {
    margin: 20,
    textAlign: 'start',
    color: $lightGray
  }
});

