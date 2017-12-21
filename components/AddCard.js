import React from 'react';
import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { Input, Container } from './styled';

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleSubmit = () => {
    let { question, answer } = this.state;
    let { title, update, updateDeck } = this.props.navigation.state.params;

    if (question === '' || answer === '') {
      Alert.alert('Question and Answer fields cannot be empty');
      return;
    }

    this.props.addCard(title, {question, answer});
    this.setState({
      question: '',
      answer: ''
    });
  }

  render() {
    return (
      <Container>
        <Input
          placeholder="Question"
          onChangeText={question => this.setState({question: question})}
          value={this.state.question}
        />
      <Input
          placeholder="Answer"
          onChangeText={answer => this.setState({answer: answer})}
          value={this.state.answer}
        />
        <Button
          title="Add Card"
          onPress={this.handleSubmit}
        />
    </Container>
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
