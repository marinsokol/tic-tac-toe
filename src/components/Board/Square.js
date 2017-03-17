import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from '../../styles';

function Square(mainProps) {
  return {

    actions(sources) {
      return [
        sources.select(TouchableHighlight)
          .on('onPress')
          .mapTo({
            type: 'boardSelect',
            square: mainProps.index,
          }),
      ];
    },

    view(props) {
      const { style, text } = props; // eslint-disable-line

      return (
        <TouchableHighlight style={style}>
          <Text style={styles.tableText}> {text} </Text>
        </TouchableHighlight>
      );
    },
  };
}

export default Square;
