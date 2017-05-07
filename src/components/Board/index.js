import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from '../../styles';

export default class extends Component {
  static displayName = 'Board'

  state = {}

  getBoard = () => {
    const { board } = this.props;
    const boardElement = [];
    board.forEach((row, rowIndex) => {
      const tempRow = [];
      row.forEach((col, colIndex) => {
        let tempStyle = [styles.col, styles.rightBord];
        if (colIndex > row.length - 2) tempStyle = styles.col;
        const index = `${rowIndex}${colIndex}`;

        tempRow.push(
          <TouchableHighlight style={tempStyle} onPress={() => this.handlePress(index)} key={index}>
            <Text style={styles.tableText}> {col} </Text>
          </TouchableHighlight>
        );
      });

      let tempStyle = [styles.row, styles.bottomBord];
      if (rowIndex > row.length - 2) tempStyle = styles.row;

      boardElement.push(
        <View style={tempStyle} key={rowIndex}>
          {tempRow}
        </View>
      );
    });

    return boardElement;
  }

  handlePress = index => this.props.select(index);

  render() {
    const board = this.getBoard();

    return (<View style={styles.table}>
      {board}
    </View>);
  }
}
