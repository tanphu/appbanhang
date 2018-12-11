import React from 'react';
import MainScreen from './MainScreen';
import { Provider } from 'react-redux';
import Store from './Store/index';
import Apikey from './ApiKey';
import firebase from 'firebase';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    firebase.initializeApp(Apikey.firebaseConfig);
  }
  render() {
    return (
      <Provider store={Store}>
        <MainScreen />
      </Provider>
    );
  }
}
