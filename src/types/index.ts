import { NavigationProp, ParamListBase } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  MAIN: undefined;
  Profile: { userId: string };
  ITEMS: { screen: string };
  Settings: undefined;
  SignUpPage: undefined;
  FindPage: { what: string };
  OOTC: undefined;
  LoginPage: undefined;
  ModifyPage: undefined;
};

export interface AppNavigationProp extends NavigationProp<RootStackParamList> {}
