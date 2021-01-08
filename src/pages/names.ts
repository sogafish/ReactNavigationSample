const HOME = 'Home';
const DETAIL = 'Detail';
const PAGE_LIST = 'PageList';
const TOOL = 'Tool';
const TOOL2 = 'Tool2';

export const NAMES = {
  HOME,
  DETAIL,
  PAGE_LIST,
  TOOL,
  TOOL2,
} as const;

export type PageNameKeyType = keyof typeof NAMES;
export type PageNameType = typeof NAMES[PageNameKeyType];

export type RootStackParamList = {
  [HOME]: {};
  [DETAIL]: {
    userId?: number;
  };
  [PAGE_LIST]: undefined;
  [TOOL]: undefined;
  [TOOL2]: {};
};
