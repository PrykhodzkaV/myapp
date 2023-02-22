import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {HeaderComponent} from '../components/headerComponent/HeaderComponent';
import {InputComponent} from '../components/inputComponent/InputComponent';
import {ItemComponent} from '../components/itemComponent/ItemComponent';
import {ElementType, StoreType} from './MainScreen.types';
import {useStyles} from './MainScreen.styles';
export const MainScreen: React.FC = () => {
  const styles = useStyles();
  const [store, setStore] = useState<StoreType>([]);
  const [numberCompletedTasks, setNumberCompletedTasks] = useState(0);
  const [isFocused, setFocused] = useState<boolean>(false);
  const addItem = useCallback(
    (text: string) => {
      setStore([
        ...store,
        {id: Math.random().toString(16).slice(2), title: text, done: false},
      ]);
    },
    [store],
  );
  const deleteItem = useCallback(
    (item: ElementType) => {
      if (item.done) {
        setNumberCompletedTasks(numberCompletedTasks - 1);
      }
      setStore(store.filter(el => el.id !== item.id));
    },
    [numberCompletedTasks, store],
  );
  const selectTask = useCallback(
    (item: ElementType) => {
      const delta = !item.done ? 1 : -1;
      setNumberCompletedTasks(numberCompletedTasks + delta);
      setStore(
        store.map(el => {
          if (el.id === item.id) {
            return {...el, done: !el.done} as unknown as ElementType;
          }
          return el;
        }),
      );
    },
    [numberCompletedTasks, store],
  );
  const updateItem = useCallback(
    (item: ElementType, text: string) => {
      setStore(
        store.map(el => {
          if (el.id === item.id) {
            return {...el, title: text} as unknown as ElementType;
          }
          return el;
        }),
      );
    },
    [store],
  );
  const renderItem: ListRenderItem<ElementType> = useCallback(
    ({item}) => (
      <ItemComponent
        item={item}
        deleteItem={deleteItem}
        selectTask={selectTask}
        updateItem={updateItem}
        setFocused={setFocused}
      />
    ),
    [deleteItem, selectTask, updateItem],
  );
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        numberCompletedTasks={numberCompletedTasks}
        numberAllTasks={store.length}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          // Keyboard.dismiss();
          setFocused(false);
        }}>
        {/* <KeyboardAvoidingView
          style={styles.keyboardAvoidView}
          // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          > */}
        <>
          <FlatList data={store} renderItem={renderItem} />
          {/* {!isFocused ? <InputComponent addItem={addItem} /> : null} */}
          <InputComponent addItem={addItem} />
        </>
        {/* </KeyboardAvoidingView> */}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
