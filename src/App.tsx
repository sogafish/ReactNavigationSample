import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { Detail, Home } from './pages';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'ホーム' }}>
          {(props: StackScreenProps<{}>) => <Home {...props} isExtra />}
        </Stack.Screen>
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: '詳細' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
