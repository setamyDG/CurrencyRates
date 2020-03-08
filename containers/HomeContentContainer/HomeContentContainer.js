import React from 'react';
import {View, StyleSheet, ImageBackground, Alert} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import ResultText from '../../components/ResultText/ResultText';
import PickerComponent from '../../components/PickerComponent/PickerComponent';
import TextInputComponent from '../../components/TextInputComponent/TextInputComponent';
import BottomSignature from '../../components/BottomSignature/BottomSignature';
import * as exchangeCurrenciesActions from '../../store/actions/index';
import {connect} from 'react-redux';

class HomeContentContainer extends React.Component {

  compareAlert = () => {
    const number = ([this.props.secondAmount] / this.props.currencyPLN).toFixed(4);
    console.log(this.props.base);
    if (this.props.secondAmount < this.props.currencyPLN) {
      Alert.alert(
        'Currency exchange',
        `You cant buy any ${this.props.base} for : ${
          this.props.secondAmount
        } PLN. Actually course for 1 ${this.props.base} is: ${
            this.props.currencyPLN.toFixed(4)
        } PLN. We will inform you when course will be closer to your price!`,
      );
    } else if (this.props.secondAmount > this.props.currencyPLN) {
      Alert.alert(
        'Currency exchange',
        `You can buy  ${number} ${this.props.base} for : ${
          this.props.secondAmount
        } PLN. Actually course for 1 ${this.props.base} is : ${
          this.props.currencyPLN.toFixed(4)
        } PLN. Go exchange your money or wait for better price`,
      );
    }
  };

  componentDidMount() {
    if (this.props.amount === isNaN) {
      return;
    } else {
      try {
        this.props.fetchData();
      } catch (e) {
        console.log('error', e);
      }
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/2.jpeg')}>
        <View style={styles.container}>
          <View style={styles.inputsContainer}>
            <TextInputComponent
              value={this.props.amount}
              onChangeText={this.props.handleInput}
            />
            <PickerComponent
              selectedValue={this.props.base}
              onValueChange={value => this.props.fetchData(value)}
            />
          </View>
          <View style={styles.inputsContainer}>
            <TextInputComponent
              editable={false}
              value={`${
                this.props.amount === ''
                  ? '0'
                  : this.props.result === null
                  ? 'Calculating...'
                  : this.props.result
              }`}
            />
            <PickerComponent
              selectedValue={this.props.convertTo}
              onValueChange={this.props.handleSecondSelect}
            />
          </View>
        </View>
        <View style={styles.resultTextStyleContainer}>
          <ResultText
            equevalentText={`${this.props.amount} ${
              this.props.base
            } is equevalent to `}
            amountText={`${
              this.props.amount === ''
                ? '0'
                : this.props.result === null
                ? 'Calculating...'
                : this.props.result
            }${' '}${this.props.convertTo}`}
            dateText={`As of ${
              this.props.amount === ''
                ? ''
                : this.props.date === null
                ? ''
                : this.props.date
            }`}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.inputsContainer}>
            <TextInputComponent
              placeholder="BUY PIRCE"
              value={this.props.secondAmount}
              onChangeText={this.props.handleSecondInput}
            />
            <PickerComponent
              selectedValue={this.props.base}
              onValueChange={value => this.props.fetchData(value)}
            />
          </View>
        </View>
        <CustomButton buttonTitle="CALCULATE" onClick={this.compareAlert} />
        <BottomSignature />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    base: state.base,
    amount: state.amount,
    secondAmount: state.secondAmount,
    convertTo: state.convertTo,
    result: (state.result[state.convertTo] * state.amount).toFixed(2),
    date: state.date,
    currencyPLN: state.currencyPLN,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSecondSelect: itemValue =>
      dispatch(exchangeCurrenciesActions.handleSecondSelect(itemValue)),

    handleInput: text => dispatch(exchangeCurrenciesActions.handleInput(text)),

    handleSecondInput: text2 =>
      dispatch(exchangeCurrenciesActions.handleSecondInput(text2)),

    fetchData: itemValue =>
      dispatch(exchangeCurrenciesActions.fetchData(itemValue)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContentContainer);

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    backgroundColor: 'black',
    opacity: 0.6,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '10%',
    marginBottom: '5%',
  },
  resultTextStyleContainer: {
    top: '-10%',
  },
  bottomContainer: {
    width: 350,
    height: 100,
    backgroundColor: 'black',
    opacity: 0.6,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsContainer: {
    backgroundColor: 'white',
    borderColor: 'silver',
    borderWidth: 3,
    borderRadius: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
