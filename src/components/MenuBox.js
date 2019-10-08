import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

import { TodoContext } from '../context/TodoContext';
import { ModalContext } from '../context/ModalContext';

const MenuBox = ({ todoId, children }) => {
  const { setEditId, deleteTodo } = useContext(TodoContext);
  const { openModal } = useContext(ModalContext);

  const { label, editStyle, deleteStyle } = styles;

  return (
    <Menu>
      <MenuTrigger>{children}</MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <MenuOption
          onSelect={() => {
            setEditId(todoId);
            openModal();
          }}
        >
          <Feather name="edit-3" size={28} color="#627D98" />
          <Text style={[label, editStyle]}>Edit</Text>
        </MenuOption>
        <MenuOption onSelect={() => deleteTodo(todoId)}>
          <Feather name="trash-2" size={28} color="#D64545" />
          <Text style={[label, deleteStyle]}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginLeft: 5
  },
  editStyle: {
    color: '#486581'
  },
  deleteStyle: {
    color: '#d64545'
  }
});

const optionsStyles = {
  optionsContainer: {
    width: 130
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10
  }
};

export default MenuBox;
