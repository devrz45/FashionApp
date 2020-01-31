import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/Home';
import FeaturedScreen from './src/screens/Featured';
import TrendingScreen from './src/screens/Trending';
import DetailsScreen from './src/screens/Details';
import LoginScreen from './src/screens/Login';
import LandingScreen from './src/screens/Landing'

const RootStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Featured: { screen: FeaturedScreen },
    Trending: { screen: TrendingScreen },
    Details: { screen: DetailsScreen }
});

const AuthStack = createStackNavigator({
    Login: { screen: LoginScreen}
});

const EntryNavigator = createSwitchNavigator({
        Landing: LandingScreen,
        Root: RootStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Landing',
    });

const App = createAppContainer(EntryNavigator)
export default App;