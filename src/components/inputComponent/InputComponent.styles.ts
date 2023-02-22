import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    componentContainter: {
      backgroundColor: 'transparent',
      borderTopWidth: 1,
      borderTopColor: 'gray',
      padding: 20,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      height: 50,
      marginRight: 20,
      borderWidth: 1,
      padding: 10,
      flex: 3,
      borderColor: 'gray',
    },
    button: {
      height: 50,
      alignItems: 'center',
      backgroundColor: '#FFC300',
      paddingHorizontal: 20,
      paddingVertical: 15,
      flex: 1,
    },
    buttonText: {fontSize: 16, fontWeight: 'bold'},
    header: {fontSize: 16, fontWeight: 'bold', marginBottom: 10},
  });
};
