import React from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import RootNavigator from './RootNavigator';
import { initializeDeck } from '../actions';

class RootNavigation extends React.Component {
  componentDidMount() {
    this.props.initializeDeck();
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    return (
      <RootNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    )
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeDeck: () => {
      dispatch(initializeDeck());
    },
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
