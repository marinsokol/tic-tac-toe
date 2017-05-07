import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from '../../styles';

export default class extends Component {
  static displayName = 'Header'

  state = {}

  handlePress = () => this.props.reset();

  render() {
    const { result, turn } = this.props;

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
        <TouchableHighlight onPress={this.handlePress} style={styles.button}>
          <Text style={styles.buttonText}> RESET </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
