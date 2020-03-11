import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const TextInputComponent = props => (
  <View>
    <TextInput
      style={styles.textInput}
      keyboardType="numeric"
      value={props.value}
      onChangeText={props.onChangeText}
      editable={props.editable}
      placeholder={props.placeholder}
    />
  </View>
);

export default TextInputComponent;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

TextInputComponent.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  placeholder: PropTypes.string,
};
