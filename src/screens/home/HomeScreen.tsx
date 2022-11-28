import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useStyles} from './HomeScreen.style';

interface HomeScreenProps {}
export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen</Text>
    </SafeAreaView>
  );
};
