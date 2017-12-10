import { CREATE_DECK, ADD_CARD_TO_DECK, LOAD_DECK } from './actionTypes';
import { getDecks, saveDeckTitle, addCardToDeck, hydrateDecks } from '../utils/db';

export function createDeck(title) {
  return (dispatch) => {
    return saveDeckTitle(title)
    .then((result) => {
      dispatch({
        type: CREATE_DECK,
        payload: {title}
      });
    });
  };
}

export function addCard(deckId, card) {
  return (dispatch) => {
    addCardToDeck(deckId, card)
    .then(() => {
      dispatch({
        type: ADD_CARD_TO_DECK,
        payload: {deckId, card}
      });
    });
  };
}

export function initializeDeck() {
  return (dispatch) => {
    getDecks()
    .then((deck) => {
      if (deck === null) {
        hydrateDecks().then(() => {
          getDecks().then((deck) => {
            dispatch({ type: LOAD_DECK, payload: {deck}});
          });
        });
      } else {
        dispatch({ type: LOAD_DECK, payload: {deck}});
      }
    });
  };
}
