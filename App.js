
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';
import reducers from './src/reducers';

export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAd6Ta4zwRLjCzDG-OMsMl7ONpI2svwXSk',
      authDomain: 'manager-db1e8.firebaseapp.com',
      databaseURL: 'https://manager-db1e8.firebaseio.com',
      projectId: 'manager-db1e8',
      storageBucket: 'manager-db1e8.appspot.com',
      messagingSenderId: '429905140597'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
        <Provider store={store}>
           <Router />
        </Provider>
    );
  }
}

