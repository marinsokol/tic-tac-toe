import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Board from './src/components/Board';
import { checkWinner, isBoardFull } from './src/utils';
import styles from './src/styles';

const initialState = {
  turn: 'X',
  result: {
    X: 0,
    O: 0,
  },
  board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

export default class extends Component {
  static displayName = 'App'

  state = initialState

  handleReset = () => this.setState(initialState);

  handleSelect = (square) => {
    const { turn, board, result } = this.state;
    const choosenRow = parseInt(square[0], 10);
    const choosenCol = parseInt(square[1], 10);
    if (board[choosenRow][choosenCol] !== '') return;

    const newBoard = board.map((row, rowIndex) => (
      row.map((col, colIndex) => {
        if (rowIndex === choosenRow && colIndex === choosenCol) {
          return turn;
        }

        return col;
      })
    ));

    const winner = checkWinner(newBoard);
    if (winner) {
      this.setState({
        ...this.state,
        turn: 'X',
        result: {
          ...result,
          [winner]: result[winner] + 1,
        },
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
      });
      return;
    }

    if (isBoardFull(newBoard)) {
      this.setState({
        ...this.state,
        turn: 'X',
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
      });
      return;
    }

    this.setState({
      ...this.state,
      board: newBoard,
      turn: (turn === 'X') ? 'O' : 'X',
    });
  }

  render() {
    const newProps = {
      ...this.state,
      select: this.handleSelect,
    };

    return (
      <View style={styles.container}>
        <Header {...this.state} reset={this.handleReset} />
        <Board {...this.state} select={this.handleSelect} />
      </View>
    );
  }
}
