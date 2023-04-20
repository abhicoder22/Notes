import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/Screens/IndexScreen';
import {Provider} from './src/Context/BlogContext';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Index" component={IndexScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
