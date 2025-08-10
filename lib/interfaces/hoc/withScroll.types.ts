export type TWithScroll = {
  isVisible: boolean;
  scrollDirection: 'up' | 'down' | null;
  scrollY: number;
};

export type TScrollState = {
  isVisible: boolean;
  hasScrolled: boolean;
  scrollDirection: 'up' | 'down' | null;
};