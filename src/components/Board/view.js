import React from 'react';
import { View } from 'react-native';
import Square from './Square';
import styles from '../../styles';

function BoardView(props) {
  const { board } = props; // eslint-disable-line
  const boardElement = [];
  board.forEach((row, rowIndex) => {
    const tempRow = [];
    row.forEach((col, colIndex) => {
      let tempStyle = [styles.col, styles.rightBord];
      if (colIndex > row.length - 2) tempStyle = styles.col;
      const index = `${rowIndex}${colIndex}`;

      tempRow.push(
        <Square style={tempStyle} index={index} text={col} key={index} />
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

  return (<View style={styles.table}>
    {boardElement}
  </View>
  );
}

export default BoardView;
