import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useStyles} from './HomeScreen.style';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PATHS} from '../../navigation/paths';

export const HomeScreen: React.FC = () => {
  const styles = useStyles();
  const {navigate} = useNavigation<
    StackNavigationProp<{
      [PATHS.DETAILS]: {};
    }>
  >();

  const onNavigate = () => {
    navigate(PATHS.DETAILS, {});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home screen</Text>
      <Button onPress={onNavigate} title="Go to Details" />
    </SafeAreaView>
  );
};
