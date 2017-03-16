import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    width: 330,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 40,
    color: 'white',
  },
  turn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 90,
  },
  button: {
    borderWidth: 1,
    borderColor: 'red',
    width: 330,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  table: {
    width: 330,
    height: 330,
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 10,
    flexDirection: 'column',
  },
  tableText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    height: 110,
  },
  col: {
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBord: {
    borderColor: 'blue',
    borderRightWidth: 2,
  },
  bottomBord: {
    borderColor: 'blue',
    borderBottomWidth: 2,
  },
});
