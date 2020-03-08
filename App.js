import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './navigation/MainTabNavigator/MainTabNavigator';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import exchangeCurrencies from './store/reducers/exchangeCurriences';
import thunk from 'redux-thunk';

export default class App extends React.Component {
  render() {
    const store = createStore(exchangeCurrencies, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <MainTabNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
