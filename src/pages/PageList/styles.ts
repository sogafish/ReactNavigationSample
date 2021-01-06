import { StyleSheet } from 'react-native';

const SIDE_PADDING = 10;

export const styles = StyleSheet.create({
  pageList: {
    paddingVertical: 20,
  },
  listContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  followingList: {
    marginTop: 20,
  },
  containerInner: {
    marginLeft: SIDE_PADDING,
  },
  listItem: {
    paddingLeft: 10,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  listItemInnerContainer: {
    justifyContent: 'center',
    paddingVertical: 10,
  },
  listItemText: {
    paddingLeft: 5,
    color: '#999999',
  },
});
