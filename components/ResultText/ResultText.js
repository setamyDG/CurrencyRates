import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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

ResultText.propTypes = {
  equevalentText: PropTypes.string,
  amountText: PropTypes.string,
  dateText: PropTypes.string,
};
