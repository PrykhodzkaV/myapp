import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen, DetailsScreen} from '../screens';
import {PATHS} from './paths';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const renderTabIcon = (
  route: any,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName = 'home';
  switch (route.name) {
    case PATHS.HOME:
      iconName = focused ? 'home' : 'home-outline';
      break;
    case PATHS.PROFILE:
      iconName = focused ? 'person' : 'person-outline';
      break;
    default:
      iconName = focused ? 'home' : 'home-outline';
      break;
  }
  return <Icon name={iconName} size={size} color={color} />;
};
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={PATHS.HOME}
        component={HomeScreen}
      />
      <Stack.Screen name={PATHS.DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(route, focused, color, size),
        })}>
        <Tab.Screen name={PATHS.HOME} component={HomeStack} />
        <Tab.Screen name={PATHS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
