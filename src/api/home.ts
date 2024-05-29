import { MutationFunction } from 'react-query';
import axios from 'axios';

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

export const GetCategory: MutationFunction<
  any,
  {
    name: string;
    email: string;
    userId: string;
  }
> = async variables => {
  const { name, email, userId } = variables;
  const { data } = await axios.get<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/category`,
  );
  return data;
};

export const GetCategoryDetail: MutationFunction<
  any,
  { id: number; name: string; email: string; userId: string }
> = async variables => {
  const { name, email, userId, id } = variables;
  const { data } = await axios.get<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/category/${id}`,
  );
  return data;
};

export const PatchCategoryDetail: MutationFunction<
  any,
  { name: string; id: string }
> = async variables => {
  const { name, id } = variables;
  const { data } = await axios.patch<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/category/${id}`,
    {
      name,
    },
  );
  return data;
};

export const DeleteCategoryDetail: MutationFunction<
  any,
  { name: string; id: string }
> = async variables => {
  const { name, id } = variables;
  const { data } = await axios.delete<any>(
    `${process.env.EXPO_PUBLIC_API_URL}/category/${id}`,
  );
  return data;
};
