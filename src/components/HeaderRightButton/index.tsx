import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function HeaderRightButton({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
