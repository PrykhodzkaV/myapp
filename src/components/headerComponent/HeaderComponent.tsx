import React from 'react';
import {Text, View} from 'react-native';
import {useStyles} from './HeaderComponent.styles';
import {HeaderComponentProps} from './HeaderComponent.types';

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  numberCompletedTasks,
  numberAllTasks,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To do</Text>
      <Text style={styles.completing}>
        You've completed {numberCompletedTasks} of {numberAllTasks} task(s)
      </Text>
    </View>
  );
};
