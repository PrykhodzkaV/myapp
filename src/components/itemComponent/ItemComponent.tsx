import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ButtonNames} from '../../screens/MainScreen.types';
import {useStyles} from './ItemComponent.styles';
import {ItemComponentProps} from './ItemComponent.types';

export const ItemComponent: React.FC<ItemComponentProps> = ({
  item,
  deleteItem,
  selectTask,
  updateItem,
  setFocused,
}) => {
  const [text, setText] = useState<string>(item.title);
  const [selected, setSelected] = useState<boolean>(false);
  const styles = useStyles();
  const changeItem = () => {
    setSelected(!selected);
  };
  const cancel = () => {
    setSelected(!selected);
    setText(item.title);
    setFocused(false);
  };
  const onValueChange = () => {
    selectTask(item);
  };
  const deleteUpdate = () => {
    if (!selected) {
      deleteItem(item);
    } else {
      updateItem(item, text);
      setSelected(!selected);
    }
    setFocused(false);
  };
  const checkboxView = () => {
    return (
      <>
        <CheckBox
          onCheckColor="white"
          onFillColor="#007aff"
          onAnimationType="fade"
          offAnimationType="fade"
          value={item.done}
          onValueChange={onValueChange}
          boxType="square"
        />
        <TouchableOpacity style={styles.title} onPress={changeItem}>
          <Text style={item.done ? styles.textStyle : {}}>{item.title}</Text>
        </TouchableOpacity>
      </>
    );
  };
  const textInputView = () => {
    return (
      <View style={styles.changedView}>
        <TextInput
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity style={styles.cancel} onPress={cancel}>
          <Text style={styles.buttonText}>{ButtonNames.CANCEL}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {!selected ? checkboxView() : textInputView()}
      <TouchableOpacity
        style={selected ? styles.buttonSelectedText : styles.button}
        onPress={deleteUpdate}>
        <Text style={styles.buttonText}>
          {selected ? ButtonNames.UPDATE : ButtonNames.DELETE}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
