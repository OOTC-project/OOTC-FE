import { MutationFunction } from 'react-query';
import axios from 'axios';
import { PostSignInType } from './types';

export const PostSignIn: MutationFunction<
  PostSignInType,
  { userId: string; password: string }
> = async variables => {
  const { userId, password } = variables;
  const { data } = await axios.post<PostSignInType>(
    `http://54.180.108.187:7777/auth/signIn`,
    {
      userId,
      password,
    },
  );
  return data;
};

// export const GetResourceList: MutationFunction<
//   GetResourceListType,
//   {
//     page: string;
//     size: string;
//     resourceName?: string;
//     kpxTradeId?: string;
//     plantType?: string;
//     market?: boolean | string;
//     jejuYn?: boolean | string;
//   }
// > = async (variables) => {
//   const { page, size, resourceName, kpxTradeId, jejuYn, plantType, market } =
//     variables;
//   const { data } = await instance.get<GetResourceListType>(
//     `${
//       import.meta.env.VITE_API_HOST
//     }/api/vpp-res-mng?resourceName=${resourceName}&kpxTradeId=${kpxTradeId}&plantType=${plantType}&jejuYn=${jejuYn}&market=${market}&page=${page}&size=${size}`
//   );
//   return data;
// };
