import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { TodoContext } from '../context/TodoContext';

const TabItem = ({ label, iconName, callback }) => {
  const {
    state: { filterBy }
  } = useContext(TodoContext);

  const { tabButton, iconLabel } = styles;

  const color = filterBy === label ? '#2680c2' : '#9fb3c8';

  return (
    <TouchableOpacity style={tabButton} onPress={callback}>
      <Feather name={iconName} color={color} size={24} />
      <Text style={{ ...iconLabel, color }}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconLabel: {
    fontSize: 12
  }
});

export default TabItem;
