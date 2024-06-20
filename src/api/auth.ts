import { MutationFunction } from 'react-query';
import axios from 'axios';
import {
  GetCheckValidateType,
  GetFindIdType,
  GetUserInfoType,
  PatchResetPasswordType,
  PostSignInType,
  PostSignUpType,
} from './types';
import instance from '../utils/axios';

export const PostSignUp: MutationFunction<
  PostSignUpType,
  {
    name: string;
    userId: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }
> = async variables => {
  const { name, userId, email, password, passwordConfirm } = variables;
  const { data } = await axios.post<PostSignUpType>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/signUp`,
    {
      name,
      userId,
      email,
      password,
      passwordConfirm,
    },
  );
  return data;
};

export const PostSignIn: MutationFunction<
  PostSignInType,
  { userId: string; password: string }
> = async variables => {
  const { userId, password } = variables;
  const { data } = await axios.post<PostSignInType>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/signIn`,
    {
      userId,
      password,
    },
  );
  return data;
};

export const GetFindId: MutationFunction<
  GetFindIdType,
  {
    name: string;
    email: string;
  }
> = async variables => {
  const { name, email } = variables;
  const { data } = await axios.get<GetFindIdType>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/find/id/${encodeURIComponent(name)}/${encodeURIComponent(email)}`,
  );
  return data;
};

export const GetCheckValidate: MutationFunction<
  GetCheckValidateType,
  {
    name: string;
    email: string;
    userId: string;
  }
> = async variables => {
  const { name, email, userId } = variables;
  const { data } = await axios.get<GetCheckValidateType>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/check/validate`,
  );
  return data;
};

export const PatchResetPassword: MutationFunction<
  PatchResetPasswordType,
  { name: string; email: string; userId: string }
> = async variables => {
  const { name, email, userId } = variables;
  const { data } = await axios.patch<PatchResetPasswordType>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/reset/password`,
    {
      name,
      email,
      userId,
    },
  );
  return data;
};

export const GetUserInfo: MutationFunction<
  GetUserInfoType,
  {}
> = async variables => {
  const { data } = await instance.get<GetUserInfoType>(
    `${process.env.EXPO_PUBLIC_API_URL}/user`,
  );
  return data;
};
