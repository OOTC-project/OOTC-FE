import { MutationFunction } from 'react-query';
import axios from 'axios';
import {
  GetCheckValidateType,
  GetFindIdType,
  PostResetPasswordType,
  PostSignInType,
  PostSignUpType,
} from './types';

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

export const PostResetPassword: MutationFunction<
  PostResetPasswordType,
  { name: string; email: string; userId: string }
> = async variables => {
  const { name, email, userId } = variables;
  const { data } = await axios.post<PostResetPasswordType>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/resetPassword`,
    {
      name,
      email,
      userId,
    },
  );
  return data;
};
