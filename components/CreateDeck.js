import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { createDeck } from '../actions';
import { NavigationActions } from 'react-navigation';


class CreateDeck extends React.Component {
  state = {
    title: '',
    loading: false
  }

  onSubmit = () => {
    let { title } = this.state;
    let deck = {title, questions: []};

    this.props.createDeck(title).then(() => {
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({routeName: 'DeckTabNavigator'}),
          NavigationActions.navigate({routeName: 'Deck', params: {title}})
        ]
      });
      this.props.navigation.dispatch(resetAction);
      this._resetState();
    });

    this.setState({
      loading: true
    })
  }

  _resetState() {
    this.setState({
      title: '',
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={title => this.setState({title: title})}
          value={this.state.title}
        />
        <Button
          title="Create Deck"
          onPress={this.onSubmit}
        />
    </View>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    createDeck: (title) => {
      return dispatch(createDeck(title))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateDeck);
