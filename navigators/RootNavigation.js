import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './RootNavigator';
import { initializeDeck } from '../actions';

class RootNavigation extends React.Component {
  componentDidMount() {
    this.props.initializeDeck();
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
