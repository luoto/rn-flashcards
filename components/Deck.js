import React from 'react';
import { View, Text, Button } from 'react-native';
import { getDeck } from '../utils/db';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

function Deck(props) {
    let { title } = props.navigation.state.params;
    let { navigate } = props.navigation;
    let deck = props.decks[title];

    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <Button title="Add Card" onPress={() => navigate('AddCard', {title: deck.title})} />
        <Button title="Start Quiz" onPress={() => navigate('Quiz', {title: deck.title})} />
    </View>
    )
};

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(Deck);
