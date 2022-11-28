import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Module} from '../../types/modules';
import {useModules} from './DetailsScreen.hooks';
import {useStyles} from './DetailsScreen.style';
type DetailsProps = {route: {params: {id: string}}};
export const DetailsScreen: React.FC<DetailsProps> = ({route}) => {
  const styles = useStyles();
  const {modules, loading, error} = useModules(route.params.id);
  const renderItem = ({item}: {item: Module}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.topic}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <FlatList
            data={modules}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </SafeAreaView>
  );
};
