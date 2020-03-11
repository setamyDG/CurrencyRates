import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = props => (
  <TouchableOpacity style={styles.buttonStyle} onPress={props.onClick}>
    <Text style={{color: 'white'}}>{props.buttonTitle}</Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'transparent',
    top: '10%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

CustomButton.propTypes = {
  onClick: PropTypes.func,
  buttonTitle: PropTypes.string,
};
