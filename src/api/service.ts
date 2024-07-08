import { MutationFunction } from 'react-query';
import axios from 'axios';
import {
  GetCategoryType,
  GetClothesDetailType,
  ClothesType,
  PostCodyType,
  GetCodyType,
  CodyDetailType,
  RecommendType,
  GetOpenAiType,
} from './types';
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

export const PostClothes: MutationFunction<
  ClothesType,
  {
    clothesImg: string;
    name: string;
    description: string;
    position: string;
    fkCategoryId: number;
  }
> = async variables => {
  const { clothesImg, name, description, position, fkCategoryId } = variables;
  const { data } = await instance.post<ClothesType>(
    `${process.env.EXPO_PUBLIC_API_URL}/clothes`,
    {
      clothesImg,
      name,
      description,
      position,
      fkCategoryId,
    },
  );
  return data;
};

export const PatchClothesDetail: MutationFunction<
  ClothesType,
  {
    clothesImg: string;
    name: string;
    description: string;
    position: string;
    fkCategoryId: number;
    id: number;
  }
> = async variables => {
  const { clothesImg, name, description, position, fkCategoryId, id } =
    variables;
  const { data } = await instance.patch<ClothesType>(
    `${process.env.EXPO_PUBLIC_API_URL}/clothes/${id}`,
    {
      clothesImg,
      name,
      description,
      position,
      fkCategoryId,
    },
  );
  return data;
};

export const DeleteClothesDetail: MutationFunction<
  ClothesType,
  { id: string }
> = async variables => {
  const { id } = variables;
  const { data } = await instance.delete<ClothesType>(
    `${process.env.EXPO_PUBLIC_API_URL}/clothes/${id}`,
  );
  return data;
};

export const PostCody: MutationFunction<
  PostCodyType,
  {
    name: string;
    clothes: number[];
  }
> = async variables => {
  const { name, clothes } = variables;
  const { data } = await instance.post<PostCodyType>(
    `${process.env.EXPO_PUBLIC_API_URL}/cody`,
    {
      name,
      clothes,
    },
  );
  return data;
};

export const GetCody: MutationFunction<GetCodyType> = async variables => {
  const { data } = await instance.get<GetCodyType>(
    `${process.env.EXPO_PUBLIC_API_URL}/cody`,
  );
  return data;
};

export const GetCodyDetail: MutationFunction<
  CodyDetailType,
  { id: number }
> = async variables => {
  const { id } = variables;
  const { data } = await instance.get<CodyDetailType>(
    `${process.env.EXPO_PUBLIC_API_URL}/cody/${id}`,
  );
  return data;
};

export const PatchCody: MutationFunction<
  CodyDetailType,
  {
    name: string;
    clothes: number[];
    id: number;
  }
> = async variables => {
  const { name, clothes, id } = variables;
  const { data } = await instance.patch<CodyDetailType>(
    `${process.env.EXPO_PUBLIC_API_URL}/cody/${id}`,
    {
      name,
      clothes,
    },
  );
  return data;
};

export const DeleteCody: MutationFunction<
  CodyDetailType,
  { id: string }
> = async variables => {
  const { id } = variables;
  const { data } = await instance.delete<CodyDetailType>(
    `${process.env.EXPO_PUBLIC_API_URL}/cody/${id}`,
  );
  return data;
};

export const PostRecommend: MutationFunction<
  RecommendType,
  { id: string }
> = async variables => {
  const { id } = variables;
  const { data } = await instance.post<CodyDetailType>(
    `${process.env.EXPO_PUBLIC_API_URL}/recommend/${id}`,
  );
  return data;
};

export const DeleteRecommend: MutationFunction<
  RecommendType,
  { id: string }
> = async variables => {
  const { id } = variables;
  const { data } = await instance.delete<RecommendType>(
    `${process.env.EXPO_PUBLIC_API_URL}/recommend/${id}`,
  );
  return data;
};

export const GetOpenAi: MutationFunction<
  GetOpenAiType,
  { city: string; country: string }
> = async variables => {
  const { city, country } = variables;
  const { data } = await instance.get<GetOpenAiType>(
    `${process.env.EXPO_PUBLIC_API_URL}/open-ai/${city}/${country}`,
  );
  return data;
};
