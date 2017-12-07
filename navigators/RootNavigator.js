import React from 'react';
import { StackNavigator } from 'react-navigation';
import DeckTabNavigator from './DeckTabNavigator';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import Deck from '../components/Deck';

const RootNavigator = StackNavigator({
  DeckTabNavigator: {
    screen: DeckTabNavigator,
    navigationOptions: {
      header: null
    },
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
});

export default RootNavigator;
