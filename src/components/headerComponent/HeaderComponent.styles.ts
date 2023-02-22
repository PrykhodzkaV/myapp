import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      padding: 20,
    },
    headerText: {fontSize: 25, fontWeight: 'bold'},
    completing: {color: 'gray'},
  });
};
