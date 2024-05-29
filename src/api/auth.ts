import { MutationFunction } from 'react-query';
import axios from 'axios';
import { PostSignInType } from './types';

export const PostSignUp: MutationFunction<
  PostSignInType,
  {
    name: string;
    userId: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }
> = async variables => {
  const { name, userId, email, password, passwordConfirm } = variables;
  const { data } = await axios.post<PostSignInType>(
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
  any,
  { userId: string; password: string }
> = async variables => {
  const { userId, password } = variables;
  const { data } = await axios.post<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/signIn`,
    {
      userId,
      password,
    },
  );
  return data;
};

export const GetFindId: MutationFunction<
  any,
  {
    name: string;
    email: string;
    userId: string;
  }
> = async variables => {
  const { name, email, userId } = variables;
  const { data } = await axios.get<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/find/id`,
  );
  return data;
};

export const GetCheckValidate: MutationFunction<
  any,
  {
    name: string;
    email: string;
    userId: string;
  }
> = async variables => {
  const { name, email, userId } = variables;
  const { data } = await axios.get<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/check/validate`,
  );
  return data;
};

export const PostResetPassword: MutationFunction<
  any,
  { id: number; password: string; passwordConfirm: string }
> = async variables => {
  const { id, password, passwordConfirm } = variables;
  const { data } = await axios.post<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/auth/resetPassword`,
    {
      id,
      password,
      passwordConfirm,
    },
  );
  return data;
};

export const PostCategory: MutationFunction<
  any,
  { name: string }
> = async variables => {
  const { name } = variables;
  const { data } = await axios.post<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/category`,
    {
      name,
    },
  );
  return data;
};
