import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BottomSignature = () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>
      Application made by Daniel Gola for recruitment task from Company
      Iterators Mobile in Warsaw
    </Text>
  </View>
);

export default BottomSignature;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: '15%',
    width: 350,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});
