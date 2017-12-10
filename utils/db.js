import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'rn-flashcards:Deck';

export function hydrateDecks() {
  let state = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(state));
}

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    return JSON.parse(results);
  });
}

export function getDeck(id) {
  return getDecks().then((data) => {
    return data[id];
  });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {title, questions: []}
  }));
}

export function addCardToDeck(title, card) {
  return getDeck(title).then((data) => {
    data.questions.push(card);
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
      [data.title]: {title: data.title, questions: data.questions}
    }));
  });
}
