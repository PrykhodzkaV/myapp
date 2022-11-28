import {StyleSheet} from 'react-native';
import {BACKGROUND_BLUE} from '../assets/colors';
import {BORDER_RADIUS, PADDING} from '../assets/constants';
export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BACKGROUND_BLUE,
    },
    item: {
      marginVertical: PADDING,
      backgroundColor: 'white',
      borderRadius: BORDER_RADIUS,
    },
    text: {fontSize: 20, padding: PADDING, alignSelf: 'center'},
    image: {
      width: '100%',
      height: 200,
      borderBottomEndRadius: BORDER_RADIUS,
      borderBottomStartRadius: BORDER_RADIUS,
    },
  });
};
