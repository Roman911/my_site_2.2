import { StyleSheet } from 'aphrodite/no-important';

import {$darkGray, $lightGray, $Blue} from "./variables";

export default StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  name: {
    color: $Blue,
    fontSize: '1.2rem'
  },
  icon: {
    fontSize: '0.4rem',
    color: $lightGray,
    margin: '0 10px'
  },
  date: {
    color: $darkGray,
    fontSize: '0.9rem'
  },
  review: {
    fontSize: '1.1rem'
  }
});