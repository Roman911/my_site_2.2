import { StyleSheet } from 'aphrodite/no-important';

import { $lightGray, $Gray, $lightBlue, $Blue, $lightGray2, $lightGray3 } from "../../../styles/variables";

export default StyleSheet.create({
  windowControl: {
    paddingLeft: 20,
    paddingRight: 20
  },
  windowControlTag: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
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
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: $Gray,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 0,
    backgroundColor: $lightGray2,
    boxShadow: '2px 2px 10px 1px #adadad'
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(-50%, -50%)',
    border: '1px solid #777',
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