import useScreen from '@/lib/hooks/useScreen';

type TWithScreenSize = {
  screen: ReturnType<typeof useScreen>;
};

export default TWithScreenSize;
