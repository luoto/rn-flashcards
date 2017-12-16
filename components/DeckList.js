import React from 'react';
import { View, FlatList, Text, List, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';

function DeckList(props) {
  if (props.decks.length === 0) {
    return (
      <View style={{display: "flex", justifyContent: "center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <FlatList
      data={props.decks}
      keyExtractor={(item) => item.title}
      renderItem={({item}) => {
      return (
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Deck', {title: item.title})}>
            <Text>{item.title}</Text>
            <Text>{item.questions.length} cards</Text>
          </TouchableOpacity>
        </View>
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
