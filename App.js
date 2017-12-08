import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect, Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import RootNavigation from './navigators/RootNavigation';
import Header from './components/Header';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Provider store={store} >
          <RootNavigation />
        </Provider>
      </View>
    );
  }
}
