import React, { useState, useContext, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ModalContext } from '../context/ModalContext';

const InputBox = ({ initialState, iconName, callback, isEdit }) => {
  const { closeModal } = useContext(ModalContext);
  const [text, setText] = useState(initialState);
  const inputEl = useRef(null);

  const {
    container,
    iconContainer,
    input,
    buttonsContainer,
    button,
    buttonSave,
    buttonCancel
  } = styles;

  const onSubmit = () => {
    if (text.trim().length === 0) {
      return;
    }

    callback(text);
    setText('');
    inputEl.current.focus();

    if (isEdit) {
      closeModal();
    }
  };

  return (
    <>
      <View style={container}>
        <View style={iconContainer}>
          <Feather name={iconName} size={32} color="#9fb3c8" />
        </View>
        <TextInput
          style={input}
          placeholder="Enter Todo"
          onChangeText={setText}
          value={text}
          autoCapitalize="none"
          autoCorrect={false}
          blurOnSubmit={false}
          onSubmitEditing={onSubmit}
          autoFocus
          selectTextOnFocus
          ref={inputEl}
        />
      </View>
      {isEdit && (
        <View style={buttonsContainer}>
          <TouchableOpacity onPress={closeModal}>
            <Text style={[button, buttonCancel]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSubmit}>
            <Text style={[button, buttonSave]}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 5,

    shadowColor: '#9fb3c8',
    shadowOffset: {
      width: 1,
      height: 4
    },
    elevation: 4
  },
  iconContainer: {
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#102a43'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 15
  },
  button: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 20,
    borderRadius: 5
  },
  buttonSave: {
    color: '#f0f4f8',
    backgroundColor: '#2680c2'
  },
  buttonCancel: {
    color: '#102a43',
    backgroundColor: '#d9e2ec'
  }
});

export default InputBox;
