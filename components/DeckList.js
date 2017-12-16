import React from 'react';
import { View, FlatList, Text, List, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Heading, Subheading, Container} from './styled';

function DeckList(props) {
  if (props.decks.length === 0) {
    return (
      <Container style={{display: "flex", justifyContent: "center"}}>
        <ActivityIndicator size="large" />
      </Container>
    )
  }

  return (
    <FlatList
      data={props.decks}
      keyExtractor={(item) => item.title}
      renderItem={({item}) => {
      return (
        <ListItem>
          <TouchableOpacity onPress={() => props.navigation.navigate('Deck', {title: item.title})}>
            <Heading>{item.title}</Heading>
            <Subheading>{item.questions.length} cards</Subheading>
          </TouchableOpacity>
        </ListItem>
        )
      }}
    />
  )
}

function mapStateToProps(state, ownProps) {
  let keys = Object.keys(state.decks);
  let decks = keys.map(key => state.decks[key]);

  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);
