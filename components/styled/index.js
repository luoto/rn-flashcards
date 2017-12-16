import React from 'react';
import { Button, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import styled from 'styled-components/native';

export const Heading = styled.Text`
  color: #424242;
  font-size: 30;
`

export const CenteredHeading = Heading.extend`
  text-align: center;
`

export const Subheading = styled.Text`
  color: #FFAB40;
  font-size: 15;
`

export const AnswerField = Subheading.extend`
  color: #FFAB40;
  font-size: 18;
  height: 150;
  text-align: center;
`

export const Container = styled.View`
  background-color: white;
  height: 100%;
  padding: 20% 0;
  align-items: center;
`
export const QuizContainer = Container.extend`
  padding: 20% 2%;
`

export const ButtonGroup = styled.View`
  width: 50%;
  margin: 10% 0%;
`

export const ButtonWrapper = styled.View`
  margin: 10%;
`


export const ListItem = styled.View`
  padding: 10px;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: #EEEEEE;
  background-color: white;
`

export const Input = styled.TextInput`
  height: 40;
  border-style: solid;
  border-bottom-width: ${Platform.select({ ios: 1, android: 0})};
  border-color: #EEEEEE;
  background-color: white;
  width: 80%;
`
