import {StyleSheet} from 'react-native';
import {BACKGROUND_BLUE} from '../assets/colors';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: BACKGROUND_BLUE,
    },
  });
};
