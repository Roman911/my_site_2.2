import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $Gray, $lightBlue, $Blue, $lightGray2, $lightGray3 } from "../../../styles/variables";

export default StyleSheet.create({
  windowControl: {
    padding: ' 0 20px'
  },
  windowControlTag: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 5px'
  },
  subtitle: {
    margin: 5
  },
  label: {
    display: 'flex',
  },
  input: {
    display: 'none'
  },
  checkbox: {
    position: 'relative'
  },
  line: {
    height: 2,
    border: `1px solid ${$Gray}`,
    borderRadius: 10,
    padding: '5px 15px',
    fontSize: 0,
    backgroundColor: $lightGray2,
    boxShadow: `2px 2px 10px 1px ${$lightGray2}`
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(-50%, -50%)',
    border: `1px solid ${$Gray}`,
    borderRadius: 10,
    backgroundColor: $lightGray3,
    padding: 8
  },
  name: {
    marginLeft: 15,
    fontStyle: 'italic'
  },
  lineShow: {
    backgroundColor: $lightBlue
  },
  circleShow: {
    left: '100%',
    backgroundColor: $lightGray
  },
  nameShow: {
    color: $Blue
  }
});