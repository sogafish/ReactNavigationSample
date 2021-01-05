import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  NAMES,
  PageNameKeyType,
  PageNameType,
  RootStackParamList,
} from '../names';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const nameKeyList = Object.keys(NAMES);

function ListItem({
  onPress,
  pageName,
}: {
  onPress: () => void;
  pageName: PageNameType;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listItem}>
      <View style={styles.listItemInnerContainer}>
        <Text style={styles.listItemText}>{pageName}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function PageList(props: StackScreenProps<RootStackParamList>) {
  const { navigation } = props;

  return (
    <ScrollView style={styles.pageList}>
      <View style={styles.listContainer}>
        {nameKeyList.map((pageKey: string) => {
          const _pageKey = pageKey as PageNameKeyType;
          const pageName = NAMES[_pageKey] as PageNameType;
          const onPressItem = () => navigation.navigate(pageName);

          return (
            <ListItem
              key={`page-list-item-${_pageKey}`}
              onPress={onPressItem}
              pageName={pageName}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
