import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NAMES, RootStackParamList } from '../names';

interface IProps extends StackScreenProps<RootStackParamList> {
  isExtra: boolean;
}

export function Home(props: IProps) {
  const { navigation, isExtra } = props;

  const goToPageList = React.useCallback(
    () => navigation.navigate(NAMES.PAGE_LIST),
    [navigation],
  );

  return (
    <View>
      <Text>Home, extraProps: {String(isExtra)}</Text>
      <Button title="to PageList" onPress={goToPageList} />
    </View>
  );
}
