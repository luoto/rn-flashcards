import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { getDeck } from '../utils/db';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { Heading, Subheading, Container, ButtonGroup, ButtonWrapper } from './styled';

class Deck extends React.Component {
  _addCard(deck) {
    this.props.navigation.navigate('AddCard', {title: deck.title})
  }

  _startQuiz(deck) {
    if (deck.questions.length === 0) {
      Alert.alert('There are no cards in this deck');
      return;
    }

    this.props.navigation.navigate('Quiz', {title: deck.title})
  }

  render() {
    let { title } = this.props.navigation.state.params;
    let deck = this.props.decks[title];

    return (
      <Container>
        <Heading>{deck.title}</Heading>
        <Subheading>{deck.questions.length} cards</Subheading>
        <ButtonGroup>
          <ButtonWrapper>
            <Button title="Add Card" onPress={() => this._addCard(deck)} />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button title="Start Quiz" onPress={() => this._startQuiz(deck)} />
          </ButtonWrapper>
        </ButtonGroup>
    </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(Deck);
