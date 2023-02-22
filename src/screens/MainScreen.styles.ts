import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {flex: 1, justifyContent: 'space-between'},
    keyboardAvoidView: {flex: 1},
  });
};
