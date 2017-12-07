import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import DeckList from '../components/DeckList';
import CreateDeck from '../components/CreateDeck';

const DeckTabNavigator = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: () => <MaterialIcons name="dashboard" size={32} color="#FFAB40" />
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: () => <MaterialIcons name="add-box" size={32}  color="#FFAB40" />
    }
  }
}, {
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: "#FFFFFF"
    },
    style: {
      backgroundColor: Platform.select({ios: "#FFFFFF", android: "#FFAB40"})
    }
  }
});

export default DeckTabNavigator;
