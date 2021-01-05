import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { Detail, Home, PageList } from './pages';
import { NAMES, RootStackParamList } from './pages/names';

const { HOME, DETAIL, PAGE_LIST } = NAMES;

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} options={{ title: 'ホーム' }}>
          {(props: StackScreenProps<RootStackParamList>) => (
            <Home {...props} isExtra />
          )}
        </Stack.Screen>
        <Stack.Screen
          name={DETAIL}
          component={Detail}
          options={{ title: '詳細' }}
        />
        <Stack.Screen name={PAGE_LIST} component={PageList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
