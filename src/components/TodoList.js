import React, { useContext, useRef } from 'react';
import { FlatList } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import TodoItem from './TodoItem';
import EmptyList from './EmptyList';

import { filteredTodos } from '../util/todolist';

import { TodoContext } from '../context/TodoContext';

const renderItem = ({ item }) => <TodoItem {...item} />;
const keyExtractor = item => item.id;

const TodoList = () => {
  const {
    state: { todos, filterBy }
  } = useContext(TodoContext);

  const { data, iconProps } = filteredTodos(todos, filterBy);
  const list = useRef(null);

  return (
    <MenuProvider>
      <FlatList
        style={{ marginHorizontal: 15 }}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyList {...iconProps} />}
        removeClippedSubviews={true}
        ref={list}
        onContentSizeChange={() => list.current.scrollToEnd()}
      />
    </MenuProvider>
  );
};

export default TodoList;
