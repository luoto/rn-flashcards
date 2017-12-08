import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import RootNavigator from '../navigators/RootNavigator';
import { CREATE_DECK, ADD_CARD_TO_DECK, LOAD_DECK } from '../actions/actionTypes';

/****
When using the route name, we get an error:
undefined is not an object (evaluating 'state.routes[state.index]'). Need
to manually set the inital routes.
ref: https://github.com/react-community/react-navigation/issues/1357
****/
const firstAction = NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'DeckTabNavigator',
	  })
	],
});
const initialNavigationState = RootNavigator.router.getStateForAction(firstAction);

function navigationReducer (state = initialNavigationState, action) {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

function deckReducer (state = {}, action) {
	switch(action.type) {
		case CREATE_DECK:
			return state;
		case ADD_CARD_TO_DECK:
			return state;
		case LOAD_DECK:
			return state
		default:
			return state;
	}
}

const rootReducer = combineReducers({nav: navigationReducer, decks: deckReducer});

export default rootReducer;
