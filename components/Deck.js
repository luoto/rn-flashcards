import React from 'react';
import { View, Text, Button } from 'react-native';
import { getDeck } from '../utils/db';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { Heading, Subheading, Container, ButtonGroup, ButtonWrapper } from './styled';

function Deck(props) {
    let { title } = props.navigation.state.params;
    let { navigate } = props.navigation;
    let deck = props.decks[title];

    return (
      <Container>
        <Heading>{deck.title}</Heading>
        <Subheading>{deck.questions.length} cards</Subheading>
        <ButtonGroup>
          <ButtonWrapper>
            <Button title="Add Card" onPress={() => navigate('AddCard', {title: deck.title})} />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button title="Start Quiz" onPress={() => navigate('Quiz', {title: deck.title})} />
          </ButtonWrapper>
        </ButtonGroup>
    </Container>
    )
};

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(Deck);
