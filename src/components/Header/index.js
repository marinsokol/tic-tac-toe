import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from '../../styles';

function Header() {
  return {

    actions(sources) {
      return [
        sources.select(TouchableHighlight)
          .on('onPress')
          .mapTo({ type: 'reset' }),
      ];
    },

    view(props) {
      const { result, turn } = props; // eslint-disable-line

      return (
        <View>
          <View style={styles.turn}>
            <Text style={styles.resultsText}> Na redu je {turn} </Text>
          </View>
          <View style={styles.results}>
            <View>
              <Text style={styles.resultsText}> X </Text>
              <Text style={styles.resultsText}> {result.X} </Text>
            </View>
            <View>
              <Text style={styles.resultsText}> O </Text>
              <Text style={styles.resultsText}> {result.O} </Text>
            </View>
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}> RESET </Text>
          </TouchableHighlight>
        </View>
      );
    },
  };
}

export default Header;
