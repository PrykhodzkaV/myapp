import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, ProfileScreen} from '../screens';
import {SCREENS} from './paths';
const Tab = createBottomTabNavigator();
const renderTabIcon = (
  route: any,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName = 'home';
  switch (route.name) {
    case SCREENS.HOME:
      iconName = focused ? 'home' : 'home-outline';
      break;
    case SCREENS.PROFILE:
      iconName = focused ? 'person' : 'person-outline';
      break;
    default:
      iconName = focused ? 'home' : 'home-outline';
      break;
  }
  return <Icon name={iconName} size={size} color={color} />;
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(route, focused, color, size),
        })}>
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
