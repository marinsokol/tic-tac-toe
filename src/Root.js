import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Square from './components/Board/Square';
import BoardView from './components/Board/view';
import checkWinner from './checkWinner';
import styles from './styles';

function Root() {
  const initState = {
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

  return {
    initialState: initState,

    reducers(sources) {
      return [

        sources.select(Square)
          .on('boardSelect')
          .reducer((state, action) => {
            const { turn, board, result } = state;
            const { payload } = action;
            if (board[payload[0]][payload[1]] !== '') return state;

            const newBoard = board.map((row, rowIndex) => (
              row.map((col, colIndex) => {
                if (rowIndex === parseInt(payload[0], 10) &&
                  colIndex === parseInt(payload[1], 10)) return turn;

                return col;
              })
            ));

            const winner = checkWinner(newBoard);
            if (winner && winner !== 'full') {
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
            } else if (winner === 'full') {
              return {
                ...state,
                turn: 'X',
                board: [
                  ['', '', ''],
                  ['', '', ''],
                  ['', '', ''],
                ],
              };
            }

            return {
              ...state,
              board: newBoard,
              turn: (turn === 'X') ? 'O' : 'X',
            };
          }),

        sources.select(Header)
          .on('reset')
          .reducer(() => initState),

      ];
    },

    view(props, state) {
      const { board } = state;

      return (
        <View style={styles.container}>
          <Header {...state} />
          <BoardView board={board} />
        </View>
      );
    },
  };
}

export default Root;
