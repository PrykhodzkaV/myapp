import React from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useStyles} from './HomeScreen.style';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PATHS} from '../../navigation/paths';
import {useTracks} from './HomeScreen.hooks';
import {Track} from '../../types/track';
export const HomeScreen: React.FC = () => {
  const {tracks, loading, error} = useTracks();
  const styles = useStyles();
  const {navigate} = useNavigation<
    StackNavigationProp<{
      [PATHS.DETAILS]: {id: string};
    }>
  >();

  const onNavigate = (id: string) => {
    navigate(PATHS.DETAILS, {id});
  };

  const renderItem = ({item}: {item: Track}) => (
    <TouchableOpacity
      onPress={() => {
        onNavigate(item.id);
      }}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
      </View>
    </TouchableOpacity>
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
            data={tracks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </SafeAreaView>
  );
};
