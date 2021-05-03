import {StyleSheet} from 'react-native';
import COLORS from '../consts/color';

const STYLES = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', 
    marginTop: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 5
  },
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnPrimary1: {
    backgroundColor: COLORS.pink,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;
