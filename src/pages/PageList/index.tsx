import * as React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  NAMES,
  PageNameKeyType,
  PageNameType,
  RootStackParamList,
} from '../names';
import { TitleLabel } from '../../components';
import { styles } from './styles';

const nameKeyList = Object.keys(NAMES);

const { PAGE_LIST } = NAMES;

function ListItem({
  onPress,
  pageName,
  isLastChildren,
}: {
  onPress: () => void;
  pageName: PageNameType | 'GoBack' | 'PopToTop';
  isLastChildren: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.listItem, !isLastChildren && styles.containerInner]}>
      <View
        style={[
          styles.listItemInnerContainer,
          isLastChildren && styles.containerInner,
        ]}>
        <Text style={styles.listItemText}>{pageName}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function PageList(
  props: StackScreenProps<RootStackParamList, typeof PAGE_LIST>,
) {
  const { navigation } = props;
  const goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const popToTop = React.useCallback(() => navigation.popToTop(), [navigation]);

  return (
    <ScrollView style={styles.pageList}>
      <View style={styles.listContainer}>
        <View style={styles.containerInner}>
          <TitleLabel text="NAVIGATE" />
        </View>
        {nameKeyList.map((pageKey: string, idx: number) => {
          const _pageKey = pageKey as PageNameKeyType;
          const pageName = NAMES[_pageKey] as PageNameType;
          const onPressItem = () => {
            if (pageName === NAMES.DETAIL) {
              return navigation.navigate(pageName, {
                userId: Math.floor(Math.random() * 10),
              });
            }
            navigation.navigate(pageName);
          };
          const isLastChildren = nameKeyList.length === idx + 1;

          return (
            <ListItem
              key={`page-list-item-${_pageKey}`}
              onPress={onPressItem}
              pageName={pageName}
              isLastChildren={isLastChildren}
            />
          );
        })}
      </View>

      <View style={[styles.listContainer, styles.followingList]}>
        <View style={styles.containerInner}>
          <TitleLabel text="PUSH" />
        </View>
        {nameKeyList.map((pageKey: string, idx: number) => {
          const _pageKey = pageKey as PageNameKeyType;
          const pageName = NAMES[_pageKey] as PageNameType;
          const onPressItem = () => {
            if (pageName === NAMES.DETAIL) {
              navigation.setOptions({ title: 'BackBackBack' });

              return navigation.push(pageName, {
                userId: Math.floor(Math.random() * 10),
              });
            }
            navigation.push(pageName);
          };
          const isLastChildren = nameKeyList.length === idx + 1;

          return (
            <ListItem
              key={`page-push-list-item-${_pageKey}`}
              onPress={onPressItem}
              pageName={pageName}
              isLastChildren={isLastChildren}
            />
          );
        })}
      </View>

      <View style={[styles.listContainer, styles.followingList]}>
        <View style={styles.containerInner}>
          <TitleLabel text="OTHERS" />
        </View>
        <ListItem onPress={goBack} pageName="GoBack" isLastChildren={false} />
        <ListItem onPress={popToTop} pageName="PopToTop" isLastChildren />
      </View>
    </ScrollView>
  );
}
