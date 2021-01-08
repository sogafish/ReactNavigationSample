import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Home, PageList, Tool } from './pages';
import { NAMES } from './pages/names';
import { HeaderLogoTitle, HeaderRightButton } from './components';

const { HOME, DETAIL, PAGE_LIST, TOOL, TOOL2 } = NAMES;

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME}>
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
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },
          })}
        />
        <Stack.Screen
          name={PAGE_LIST}
          component={PageList}
          options={{
            headerTitle: () => <HeaderLogoTitle />,
          }}
        />
        <Stack.Screen
          name={TOOL}
          component={Tool}
          options={{
            headerTitle: () => <HeaderLogoTitle />,
            headerRight: () => (
              <HeaderRightButton
                text="Yo"
                onPress={() => console.log('Pressed')}
              />
            ),
          }}
        />
        <Stack.Screen name={TOOL2}>
          {(props: $FixMe) => <Tool {...props} changeRightButton />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
