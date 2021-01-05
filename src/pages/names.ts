const HOME = 'Home';
const DETAIL = 'Detail';
const PAGE_LIST = 'PageList';

export const NAMES = {
  HOME,
  DETAIL,
  PAGE_LIST,
} as const;

export type PageNameKeyType = keyof typeof NAMES;
export type PageNameType = typeof NAMES[PageNameKeyType];

export type RootStackParamList = {
  [HOME]: undefined;
  [DETAIL]: undefined;
  [PAGE_LIST]: undefined;
};
