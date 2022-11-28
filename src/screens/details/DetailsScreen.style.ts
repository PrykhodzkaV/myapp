import {StyleSheet} from 'react-native';
import {BACKGROUND_BLUE} from '../assets/colors';
import {BORDER_RADIUS, PADDING} from '../assets/constants';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: BACKGROUND_BLUE,
    },
    item: {
      flex: 1,
      width: '100%',
      marginVertical: PADDING,
      backgroundColor: 'white',
      borderRadius: BORDER_RADIUS,
    },
    text: {fontSize: 20, padding: PADDING, alignSelf: 'center'},
  });
};
