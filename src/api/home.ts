import { MutationFunction } from 'react-query';
import axios from 'axios';
import { GetCategoryType, GetClothesDetailType } from './types';
import instance from '../utils/axios';

// version 2
// export const PostCategory: MutationFunction<
//   any,
//   { name: string }
// > = async variables => {
//   const { name } = variables;
//   const { data } = await instance.post<any>(
//     `${process.env.EXPO_PUBLIC_API_URL}/category`,
//     {
//       name,
//     },
//   );
//   return data;
// };

export const GetCategory: MutationFunction<
  GetCategoryType
> = async variables => {
  const { data } = await instance.get<GetCategoryType>(
    `${process.env.EXPO_PUBLIC_API_URL}/category`,
  );
  return data;
};

// version 2
// export const PatchCategoryDetail: MutationFunction<
//   any,
//   { name: string; id: string }
// > = async variables => {
//   const { name, id } = variables;
//   const { data } = await instance.patch<any>(
//     `${process.env.EXPO_PUBLIC_API_URL}/category/${id}`,
//     {
//       name,
//     },
//   );
//   return data;
// };

// export const DeleteCategoryDetail: MutationFunction<
//   any,
//   { name: string; id: string }
// > = async variables => {
//   const { name, id } = variables;
//   const { data } = await instance.delete<any>(
//     `${process.env.EXPO_PUBLIC_API_URL}/category/${id}`,
//   );
//   return data;
// };

export const GetClothesDetail: MutationFunction<
  GetClothesDetailType,
  { id: number }
> = async variables => {
  const { id } = variables;
  const { data } = await instance.get<GetClothesDetailType>(
    `${process.env.EXPO_PUBLIC_API_URL}/clothes/${id}`,
  );
  return data;
};
