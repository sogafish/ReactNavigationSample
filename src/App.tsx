import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Home, PageList } from './pages';
import { NAMES } from './pages/names';

const { HOME, DETAIL, PAGE_LIST } = NAMES;

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} options={{ title: 'ホーム' }}>
          {(props: $FixMe) => <Home {...props} isExtra />}
        </Stack.Screen>
        <Stack.Screen
          name={DETAIL}
          component={Detail}
          options={({
            route,
          }: {
            route: { params?: { userId?: number } };
          }) => ({
            title: `詳細: ${route.params?.userId || ''}`,
          })}
        />
        <Stack.Screen name={PAGE_LIST} component={PageList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
