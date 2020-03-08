import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultText = props => (
  <View>
    <Text style={styles.text}>
      {props.equevalentText}
      {props.amountText}
    </Text>
    <Text style={styles.text}>{props.dateText}</Text>
  </View>
);

export default ResultText;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Ionicons',
  },
});
