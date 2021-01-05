import { StyleSheet } from 'react-native';

const SIDE_PADDING = 10;

export const styles = StyleSheet.create({
  pageList: {
    paddingVertical: 20,
  },
  listContainer: {
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  listItem: {},
  listItemInnerContainer: {
    marginLeft: SIDE_PADDING,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  listItemText: {
    paddingLeft: 5,
    color: '#999999',
  },
});
