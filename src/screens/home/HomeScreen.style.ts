import {StyleSheet} from 'react-native';
import {BACKGROUND_BLUE} from '../assets/colors';
export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BACKGROUND_BLUE,
    },
  });
};
