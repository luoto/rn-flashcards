import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import { getDeck } from '../utils/db';
import { QuizContainer, Heading, AnswerField, Container, ButtonGroup, ButtonWrapper} from './styled';

class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    numberCorrect: 0,
    questions: [],
    revealAnswer: false,
    isComplete: false
  }

  componentWillMount() {
      getDeck(this.props.navigation.state.params.title).then((deck) => {
        this.setState({
          questions: deck.questions
        });
      })
  }

  _revealAnswer() {
    this.setState({
      revealAnswer: true
    });
  }

  _addPoint() {
    this.setState({
      numberCorrect: this.state.numberCorrect + 1
    });
    this._nextQuestion();
  }

  _nextQuestion() {
    this.setState({
      revealAnswer: false,
      currentQuestion: this.state.currentQuestion + 1,
      isComplete: this.state.currentQuestion === this.state.questions.length - 1
    });
  }

  _restartQuiz() {
    this.setState({
      currentQuestion: 0,
      numberCorrect: 0,
      revealAnswer: false,
      isComplete: false
    });

  }

  _goBackToDeck() {
    this.props.navigation.goBack();
  }

  render() {
    let { revealAnswer, isComplete, currentQuestion, questions, numberCorrect} = this.state;
    if (isComplete) {
      return (
        <Container>
          <Heading>
            {(numberCorrect/questions.length * 100).toFixed(0)} % Correct
          </Heading>
          <ButtonGroup>
            <ButtonWrapper>
              <Button onPress={() => this._restartQuiz()} title="Restart Quiz" />
            </ButtonWrapper>
            <ButtonWrapper>
              <Button onPress={() => this._goBackToDeck()} title="Back to Deck" />
            </ButtonWrapper>
          </ButtonGroup>
        </Container>
      )
    }

    if (questions.length === 0) {
      return (
        <Container>
          <ActivityIndicator size="large" />
        </Container>
      )
    }

    return (
      <QuizContainer>
        <Text>{`${currentQuestion + 1} / ${questions.length}`}</Text>
        <Heading>{questions[currentQuestion].question}</Heading>
        <TouchableOpacity onPress={() => this._revealAnswer()}>
          { revealAnswer ? <AnswerField>{questions[currentQuestion].answer}</AnswerField> : <AnswerField>Show Answer</AnswerField> }
        </TouchableOpacity>
        <ButtonGroup>
          <ButtonWrapper>
            <Button onPress={() => this._addPoint()} title="Correct" />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button onPress={() => this._nextQuestion()} title="Incorrect" />
          </ButtonWrapper>
        </ButtonGroup>
      </QuizContainer>
    )
  }
}

export default Quiz;
