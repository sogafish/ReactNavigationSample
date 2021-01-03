import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>App.tsx</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
