import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const EmptyList = ({ iconName, message, iconColor, backgroundColor }) => {
  const { container, iconContainer, title } = styles;

  return (
    <View style={container}>
      <View style={[iconContainer, { backgroundColor }]}>
        <Feather name={iconName} color={iconColor} size={30} />
      </View>
      <Text style={title}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32
  },
  title: {
    fontSize: 18,
    color: '#486581',
    marginTop: 12
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default EmptyList;
