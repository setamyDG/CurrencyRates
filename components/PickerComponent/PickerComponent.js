import React from 'react';
import {View, Picker, StyleSheet} from 'react-native';

class PickerComponent extends React.Component {
  state = {
    currencies: [
      'USD',
      'AUD',
      'SGD',
      'PHP',
      'EUR',
      'PLN',
      'GBP',
      'CAD',
      'MXN',
      'JPY',
      'HUF',
      'DKK',
      'ISK',
      'RUB',
      'ZAR',
      'MYR',
      'KRW',
      'TRY',
      'NOK',
      'NZD',
      'CNY',
      'THB',
      'CHF',
      'BGN',
    ],
  };

  render() {
    const {currencies} = this.state;
    return (
      <View>
        <Picker
          style={styles.picker}
          selectedValue={this.props.selectedValue}
          enabled={this.props.enabled}
          onValueChange={this.props.onValueChange}>
          {currencies.map((currency, i) => (
            <Picker.Item label={currency} value={currency} key={i}>
              {currency}
            </Picker.Item>
          ))}
        </Picker>
      </View>
    );
  }
}

export default PickerComponent;

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 100,
  },
});
