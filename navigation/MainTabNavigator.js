import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OeuvreScreen from '../screens/OeuvreScreen';
import DoubleurScreen from '../screens/DoubleurScreen';

import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-home` : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const OeuvreStack = createStackNavigator(
  {
    Oeuvre: OeuvreScreen,
  },
  config
);

OeuvreStack.navigationOptions = {
  tabBarLabel: 'Film/Série',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-film` : 'md-film'} />
  ),
};

OeuvreStack.path = '';

const SearchDoubleur = createStackNavigator(
  {
    Doubleur: DoubleurScreen,
  },
  config
);

SearchDoubleur.navigationOptions = {
  tabBarLabel: 'Doubleurs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'} />
  ),
};

SearchDoubleur.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  OeuvreStack,
  SearchDoubleur,
},{
  tabBarOptions: {
    style: {
      backgroundColor: Colors.tabs,
      inactiveTintColor : "white"
    }
  }
});

tabNavigator.path = '';

export default tabNavigator;
