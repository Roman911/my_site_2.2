import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  windowControl: {
    paddingLeft: 20,
    paddingRight: 20
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  },
  label: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    display: 'none'
  },
  checkbox: {
    position: 'relative',
    display: 'flex'
  },
  line: {
    height: 2,
    border: '1px solid #858585',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 0,
    backgroundColor: '#adadad',
    boxShadow: '2px 2px 10px 1px #adadad'
  },
  circle: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(-50%, -50%)',
    border: '1px solid #777',
    borderRadius: 10,
    backgroundColor: '#929292',
    padding: 8
  },
  name: {
    marginLeft: 15,
    fontStyle: 'italic'
  }
});