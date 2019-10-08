import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { TodoContext } from '../context/TodoContext';

import InputBox from './InputBox';

const EditContent = () => {
  const {
    state: { todos, editId },
    editTodo
  } = useContext(TodoContext);

  const todo = todos.find(todo => todo.id === editId);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Edit Todo</Text>
      <InputBox
        initialState={todo.text}
        iconName="edit-3"
        callback={editTodo}
        isEdit
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    marginBottom: 6,
    color: '#102a43'
  }
});

export default EditContent;
