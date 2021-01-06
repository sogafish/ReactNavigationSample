import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function TitleLabel({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
