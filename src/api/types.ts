export interface PostSignUpType {
  statusCode: string;
  message: string;
  data?: {
    userId: string;
    name: string;
    id: number;
    isWithdrawal: string;
    createdAt: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface PostSignInType {
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface GetFindIdType {
  statusCode: number;
  message: string;
  data?: {
    userId: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface GetCheckValidateType {
  statusCode: number;
  message: string;
  data?: {
    result: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface PostResetPasswordType {
  statusCode: number;
  message: string;
  data?: {
    result: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface GetCategoryType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    createdAt: string;
    name: string;
    clothes: clothesData[];
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}

export interface clothesData {
  id: number;
  createdAt: string;
  name: string;
  clothesImg: string;
  description: string;
  position: string;
  fkCategoryId: number;
  fkMemberId: number;
}

export interface GetClothesDetailType {
  statusCode: number;
  message: string;
  data: {
    id: number;
    name: string;
    clothesImg: string;
    description: string;
    position: string;
    fkCategoryId: number;
    fkMemberId: number;
    createdAt: string;
  };
  timestamp?: string;
  path?: string;
  error?: {
    error: string;
    statusCode: number;
    message: string;
  };
}
