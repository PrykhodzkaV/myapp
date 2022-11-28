import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useStyles} from './ProfileScreen.style';
export const ProfileScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};
