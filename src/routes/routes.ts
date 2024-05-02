import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screen {
  DISCOVER = 'DISCOVER',
  SETTINGS = 'SETTINGS',
}

export type RootStackParamList = {
  [Screen.DISCOVER]: undefined;
  [Screen.SETTINGS]: undefined;
};

export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
