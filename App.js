import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { withSearchContext } from './src/utils/searchContext';

import HomeScreen from './src/screens/Home';
import FeaturedScreen from './src/screens/Featured';
import TrendingScreen from './src/screens/Trending';
import DetailsScreen from './src/screens/Details';

const RootStack = createStackNavigator({
    Home: {screen: HomeScreen},
    Featured: {screen: FeaturedScreen},
    Trending: {screen: TrendingScreen},
    Details: {screen: DetailsScreen}
});

const App = withSearchContext(createAppContainer(RootStack))
export default App;