import * as React from 'react';
import { View, Text } from 'react-native';
import { HeaderRightButton } from '../../components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, NAMES } from '../names';
// import { styles } from './styles';

interface IProps
  extends StackScreenProps<RootStackParamList, typeof NAMES.TOOL2> {
  changeRightButton: boolean;
}

export function Tool(props: IProps) {
  const { navigation, changeRightButton } = props;
  const [count, changeCount] = React.useState(0);
  const onPressMenu = React.useCallback(() => {
    changeCount(count + 1);
  }, [count, changeCount]);

  React.useLayoutEffect(() => {
    if (changeRightButton) {
      navigation.setOptions({
        headerRight: () => (
          <HeaderRightButton text="Add" onPress={onPressMenu} />
        ),
      });
    }
  }, [navigation, changeRightButton, onPressMenu]);

  return (
    <View>
      <Text>Func2</Text>
      <Text>COUNT: {count}</Text>
    </View>
  );
}
