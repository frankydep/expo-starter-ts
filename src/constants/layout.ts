import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
const { height, width } = Dimensions.get('window');

interface Window {
  width: number;
  height: number;
  isSmallDevice: boolean;
}

interface Layout {
  container: ViewStyle;
}

export const window: Window = {
  width,
  height,
  isSmallDevice: width < 375,
};

export const layout = StyleSheet.create<Layout>({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
