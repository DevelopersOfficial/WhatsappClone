import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import {Image, TouchableOpacity} from 'react-native';
import AuthModal from '../src/components/AuthModal';
import About from '../screens/About';

const Stack = createStackNavigator();

export default function Navigator() {
  const [visible, setVisible] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      <TouchableOpacity
        style={{bottom: 10, position: 'absolute', right: 10}}
        onPress={() => {
          setVisible(true);
        }}>
        <Image
          style={{
            height: 60,
            width: 60,
          }}
          source={require('../src/assets/plus.png')}
        />
      </TouchableOpacity>
      <AuthModal visible={visible} setVisible={setVisible} />
    </NavigationContainer>
  );
}
