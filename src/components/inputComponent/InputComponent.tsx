import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {ButtonNames} from '../../screens/MainScreen.types';
import {useStyles} from './InputComponent.styles';
import {InputComponentProps} from './InputComponent.types';
export const InputComponent: React.FC<InputComponentProps> = React.memo(
  ({addItem}) => {
    const styles = useStyles();
    const [text, setText] = useState<string>('');
    return (
      <View style={styles.componentContainter}>
        <Text style={styles.header}>Add item</Text>
        <View style={styles.container}>
          <TextInput style={styles.input} onChangeText={setText} value={text} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addItem(text);
              setText('');
            }}>
            <Text style={styles.buttonText}>{ButtonNames.ADD}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
