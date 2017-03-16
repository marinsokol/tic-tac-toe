import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Square from './components/Board/Square';
import boardView from './components/Board/view';
import styles from './styles';

function checkWinner(board) {
  /**
   *  check for rows
   */
  for (let i = 0; i < board.length; i += 1) {
    let temp = true;
    for (let j = 0; j < board[i].length; j += 1) {
      if ((board[i][j] !== board[i][0]) ||
        board[i][j] === '') temp = false;
    }
    if (temp) return board[i][0];
  }

  /**
   *  check for columns
   */
  for (let i = 0; i < board.length; i += 1) {
    let temp = true;
    for (let j = 0; j < board[i].length; j += 1) {
      if ((board[j][i] !== board[0][i]) ||
        board[j][i] === '') temp = false;
    }
    if (temp) return board[0][i];
  }

  /**
   *  check for main diagonal
   */
  let tempMain = true;
  for (let i = 0; i < board.length; i += 1) {
    if ((board[i][i] !== board[0][0]) ||
      board[i][i] === '') tempMain = false;
  }
  if (tempMain) return board[0][0];

  /**
  *  check for main diagonal
  */
  let tempSec = true;
  for (let i = 0; i < board.length; i += 1) {
    if ((board[i][board.length - i - 1] !== board[2][0]) ||
      board[i][board.length - i - 1] === '') tempSec = false;
  }
  if (tempSec) return board[2][0];

  return false;
}

function Root() {
  return {
    initialState: {
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
    },

    reducers(sources) {
      return [

        sources.select(Square)
          .on('boardSelect')
          .reducer((state, action) => {
            const { turn, board, result } = state;
            const { payload } = action;
            board[payload[0]][payload[1]] = turn;

            const winner = checkWinner(board);
            if (winner) {
              return {
                ...state,
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
              };
            }

            return {
              ...state,
              turn: (turn === 'X') ? 'O' : 'X',
            };
          }),

        sources.select(Header)
          .on('reset')
          .reducer(state => ({
            ...state,
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
          })
          ),

      ];
    },

    view(props, state) {
      const { board } = state;

      return (
        <View style={styles.container}>
          <Header {...state} />
          {boardView(board)}
        </View>
      );
    },
  };
}

export default Root;
