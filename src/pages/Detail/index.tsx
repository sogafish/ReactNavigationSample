import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, NAMES } from '../names';

const { DETAIL } = NAMES;

interface IProps extends StackScreenProps<RootStackParamList, typeof DETAIL> {}

export function Detail(props: IProps) {
  const { navigation, route } = props;
  const goBack = React.useCallback(() => navigation.goBack(), [navigation]);

  return (
    <View>
      <Text>{route.name}</Text>
      <Text>userId: {route.params?.userId || '未設定'}</Text>
      <Button title="GoBack" onPress={goBack} />
    </View>
  );
}
