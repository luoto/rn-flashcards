import React from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleSubmit = () => {
    let { question, answer } = this.state;
    let { title, update, updateDeck } = this.props.navigation.state.params;

    this.props.addCard(title, {question, answer});
    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Question"
          onChangeText={question => this.setState({question: question})}
          value={this.state.question}
        />
        <InputText
          placeholder="Answer"
          onChangeText={answer => this.setState({answer: answer})}
          value={this.state.answer}
        />
        <Button
          title="Add Card"
          onPress={this.handleSubmit}
        />
    </View>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    addCard: (title, card) => {
      dispatch(addCard(title, card));
    }
  }
}
export default connect(null, mapDispatchToProps)(AddCard);
