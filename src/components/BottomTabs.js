import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { TodoContext } from '../context/TodoContext';

import TabItem from './TabItem';

const BottomTabs = () => {
  const { setFilter, reset } = useContext(TodoContext);
  const [showTabs, setShowTabs] = useState(false);
  const { tabsContainer } = styles;

  useEffect(() => {
    const keyboardListeners = [
      Keyboard.addListener('keyboardDidShow', () => {
        setShowTabs(false);
      }),
      Keyboard.addListener('keyboardDidHide', () => {
        setShowTabs(true);
      })
    ];

    return () => {
      keyboardListeners &&
        keyboardListeners.forEach(eventListener => eventListener.remove());
    };
  }, []);

  if (!showTabs) {
    return null;
  }

  return (
    <View style={tabsContainer}>
      <TabItem
        label="All"
        iconName="clipboard"
        callback={() => setFilter('All')}
      />
      <TabItem
        label="Active"
        iconName="layers"
        callback={() => setFilter('Active')}
      />
      <TabItem
        label="Completed"
        iconName="check-square"
        callback={() => setFilter('Completed')}
      />
      <TabItem label="Reset" iconName="refresh-cw" callback={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0 , 0.1)'
  }
});

export default BottomTabs;
