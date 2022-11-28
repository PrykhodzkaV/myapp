import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useStyles} from './DetailsScreen.style';
export const DetailsScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
};
