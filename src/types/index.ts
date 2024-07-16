import { NavigationProp, ParamListBase } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  MAIN: undefined;
  ITEMS: undefined;
  Profile: { userId: string };
  Settings: undefined;
  SignUpPage: undefined;
  FindPage: { what: string };
  OOTC: undefined;
  LoginPage: undefined;
  ModifyPage: undefined;
};

export interface AppNavigationProp extends NavigationProp<RootStackParamList> {}
