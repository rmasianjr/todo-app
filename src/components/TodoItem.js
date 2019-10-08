import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

import MenuBox from './MenuBox';

import { TodoContext } from '../context/TodoContext';

const TodoItem = React.memo(({ text, completed, id }) => {
  const { toggleTodo } = useContext(TodoContext);

  const {
    container,
    todoText,
    icon,
    completedStyle,
    nonCompleteStyle,
    completeText,
    nonCompleteText
  } = styles;

  const iconStyle = completed
    ? { name: 'check-circle', color: '#8eedc7' }
    : { name: 'circle', color: '#9fb3c8' };

  const todoStyle = completed ? completedStyle : nonCompleteStyle;

  const textStyle = completed ? completeText : nonCompleteText;

  return (
    <View style={[container, todoStyle]}>
      <TouchableWithoutFeedback onPress={() => toggleTodo(id)}>
        <View style={icon}>
          <Feather name={iconStyle.name} size={28} color={iconStyle.color} />
        </View>
      </TouchableWithoutFeedback>
      <Text style={[todoText, textStyle]}>{text}</Text>
      <MenuBox todoId={id}>
        <View style={icon}>
          <Feather name="more-vertical" size={28} color="#9fb3c8" />
        </View>
      </MenuBox>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    borderRadius: 5
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    paddingLeft: 8,
    paddingRight: 3,
    paddingTop: 13,
    paddingBottom: 13
  },
  completedStyle: {
    borderColor: '#65d6ad',
    borderWidth: 1
  },
  nonCompleteStyle: {
    shadowColor: '#9fb3c8',
    shadowOffset: {
      width: 1,
      height: 4
    },
    elevation: 2
  },
  nonCompleteText: {
    color: '#102a43',
    textDecorationLine: 'none'
  },
  completeText: {
    textDecorationLine: 'line-through',
    color: '#bcccdc'
  }
});

export default TodoItem;
