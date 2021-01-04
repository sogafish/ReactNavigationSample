import * as React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface IProps extends StackScreenProps<{}> {
  isExtra: boolean;
}

export function Home(props: IProps) {
  const { isExtra } = props;

  return (
    <View>
      <Text>Home, extraProps: {String(isExtra)}</Text>
    </View>
  );
}
