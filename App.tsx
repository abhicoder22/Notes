import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/Screens/IndexScreen';
import {Provider} from './src/Context/BlogContext';
import ShowScreen from './src/Screens/showScreen';
import CreateScreen from './src/Screens/CreateScreen';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Index"
          component={IndexScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('./src/Assets/plus.png')}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <stack.Screen name="Show" component={ShowScreen} />
        <stack.Screen name="Create" component={CreateScreen} />
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
